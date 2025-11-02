import React from "react";

export interface TabsProps {
  defaultIndex?: number;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> & {
  List: React.FC<{ children: React.ReactNode }>;
  Trigger: React.FC<{ children: React.ReactNode; index: number }>;
  Panel: React.FC<{ children: React.ReactNode; index: number }>;
} = ({ defaultIndex = 0, children, className = "" }) => {
  const [index, setIndex] = React.useState(defaultIndex);

  return (
    <div className={className}>
      <TabsContext.Provider value={{ index, setIndex }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

const TabsContext = React.createContext<{
  index: number;
  setIndex: (i: number) => void;
}>({ index: 0, setIndex: () => {} });

Tabs.List = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

Tabs.Trigger = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ctx = React.useContext(TabsContext);
  const active = ctx.index === index;
  return (
    <button
      onClick={() => ctx.setIndex(index)}
      className={`px-3 py-1 rounded-md ${active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
    >
      {children}
    </button>
  );
};

Tabs.Panel = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ctx = React.useContext(TabsContext);
  if (ctx.index !== index) return null;
  return <div className="p-4 bg-white rounded-md border">{children}</div>;
};

export default Tabs;
