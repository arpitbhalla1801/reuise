/**
 * Component Preview Page
 * 
 * This page allows you to preview and test components in isolation.
 * Add your components to the preview sections below.
 */

import React, { useState } from "react";
import "./index.css";
import { Button } from "./components/Button";

export function Preview() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Component Preview</h1>
          <p className="text-sm text-gray-600 mt-1">
            Live preview and testing environment for Reuise components
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Preview Section Template */}
        <PreviewSection
          title="Button Component"
          description="Interactive button with different variants"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={() => setCount(count + 1)}>
                Default Button (Clicked {count} times)
              </Button>
              <Button variant="outline" onClick={() => setCount(0)}>
                Outline Button
              </Button>
              <Button disabled>Disabled Button</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </div>
          </div>
        </PreviewSection>

        {/* Add more components here */}
        <PreviewSection
          title="New Component"
          description="Add your new component here to preview it"
        >
          <div className="p-8 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-lg mb-2">👋 Ready to preview your component?</p>
            <p className="text-sm">
              Import your component and add it in this section
            </p>
            <code className="block mt-4 text-xs bg-gray-100 px-3 py-2 rounded">
              import {"{ YourComponent }"} from "./components/YourComponent";
            </code>
          </div>
        </PreviewSection>
      </main>

      {/* Footer with instructions */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚀 Hot Reload</h3>
              <p className="text-gray-600">
                Changes to components are reflected instantly thanks to Bun's HMR
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📝 How to Use</h3>
              <p className="text-gray-600">
                Edit Preview.tsx to add your components and see them live
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎨 Styling</h3>
              <p className="text-gray-600">
                Uses Tailwind CSS for styling - customize as needed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Preview Section Component
interface PreviewSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PreviewSection({ title, description, children }: PreviewSectionProps) {
  const [isDarkBg, setIsDarkBg] = useState(false);

  return (
    <section className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={() => setIsDarkBg(!isDarkBg)}
            className="text-xs px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition"
            title="Toggle background"
          >
            {isDarkBg ? "Light BG" : "Dark BG"}
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div
        className={`p-6 transition-colors ${
          isDarkBg ? "bg-gray-900" : "bg-white"
        }`}
      >
        {children}
      </div>

      {/* Section Code Hint */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <details className="text-xs text-gray-600">
          <summary className="cursor-pointer hover:text-gray-900 font-medium">
            💡 Component Tips
          </summary>
          <div className="mt-2 space-y-1">
            <p>• Test different states (hover, focus, disabled)</p>
            <p>• Try various prop combinations</p>
            <p>• Check responsiveness at different screen sizes</p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default Preview;
