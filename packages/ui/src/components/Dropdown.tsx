import React from "react";

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, children, align = "left" }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (
        panelRef.current && panelRef.current.contains(target)
      ) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="relative inline-block">
      <button ref={buttonRef} onClick={() => setOpen((s) => !s)} className="inline-flex items-center gap-2">
        {trigger}
      </button>

      {open && (
        <div
          ref={panelRef}
          className={`absolute mt-2 min-w-[160px] rounded-md border bg-white shadow z-50 ${align === "right" ? "right-0" : "left-0"}`}
        >
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
