import { useState, useRef, useEffect } from "react";
import { useAdmin } from "./AdminProvider";

type Props = {
  section: string;
  itemKey: string;
  field: string;
  defaultValue: string;
  /** If true, renders a textarea instead of input */
  multiline?: boolean;
  /** Optional className for the display text */
  className?: string;
  /** Element tag for display mode (default: "span") */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  /** Children override display text when provided */
  children?: React.ReactNode;
};

export function EditableText({
  section,
  itemKey,
  field,
  defaultValue,
  multiline = false,
  className = "",
  as: Tag = "span",
  children,
}: Props) {
  const { editMode, getValue, save, remove } = useAdmin();
  const displayValue = getValue(section, itemKey, field, defaultValue);
  const isOverridden = displayValue !== defaultValue;

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(displayValue);
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  // Update draft when display value changes
  useEffect(() => {
    if (!editing) setDraft(displayValue);
  }, [displayValue, editing]);

  if (!editMode) {
    // Normal rendering
    if (children) return <>{children}</>;
    return <Tag className={className}>{displayValue}</Tag>;
  }

  if (editing) {
    const handleSave = async () => {
      const trimmed = draft.trim();
      if (!trimmed || trimmed === defaultValue) {
        // Revert to default — remove override
        setSaving(true);
        await remove(section, itemKey, field);
        setSaving(false);
        setEditing(false);
        return;
      }
      if (trimmed !== displayValue) {
        setSaving(true);
        await save(section, itemKey, field, trimmed);
        setSaving(false);
      }
      setEditing(false);
    };

    const handleCancel = () => {
      setDraft(displayValue);
      setEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") handleCancel();
      if (e.key === "Enter" && !multiline) {
        e.preventDefault();
        handleSave();
      }
      if (e.key === "Enter" && e.ctrlKey && multiline) {
        e.preventDefault();
        handleSave();
      }
    };

    return (
      <div className="relative inline-flex flex-col gap-1.5 w-full">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4}
            disabled={saving}
            className="w-full rounded-lg bg-background/80 border-2 border-amber-500/60 px-3 py-2 text-sm text-foreground outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 resize-y"
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={saving}
            className="w-full rounded-lg bg-background/80 border-2 border-amber-500/60 px-3 py-2 text-sm text-foreground outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
          />
        )}
        <div className="flex gap-1.5 justify-end">
          <button
            onClick={handleCancel}
            disabled={saving}
            className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-widest border border-foreground/20 text-foreground/70 hover:bg-foreground/5 transition"
          >
            Anuluj
          </button>
          {isOverridden && (
            <button
              onClick={async () => {
                setSaving(true);
                await remove(section, itemKey, field);
                setSaving(false);
                setEditing(false);
              }}
              disabled={saving}
              className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-widest border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
            >
              Przywróć
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-widest bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 transition"
          >
            {saving ? "…" : "Zapisz"}
          </button>
        </div>
      </div>
    );
  }

  // Edit mode but not actively editing — show editable indicator
  return (
    <Tag
      className={`${className} editable-field cursor-pointer relative group`}
      onClick={() => setEditing(true)}
      title="Kliknij, aby edytować"
    >
      {children ?? displayValue}
      <span
        className={`editable-badge inline-flex items-center ml-1.5 align-middle opacity-0 group-hover:opacity-100 transition-opacity ${
          isOverridden ? "text-amber-400" : "text-primary/50"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      </span>
      {isOverridden && (
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
      )}
    </Tag>
  );
}
