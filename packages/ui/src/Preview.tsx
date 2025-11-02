/**
 * Component Preview Page
 * 
 * This page allows you to preview and test components in isolation.
 * Add your components to the preview sections below.
 */

import React, { useState } from "react";
import "./index.css";
import { Button } from "./components/Button";
import { Card, CardHeader, CardBody, CardFooter } from "./components/Card";
import { Input } from "./components/Input";
import { Badge } from "./components/Badge";
import { Alert } from "./components/Alert";
import { Avatar, AvatarGroup } from "./components/Avatar";
import { Switch } from "./components/Switch";
import { Spinner, SpinnerOverlay } from "./components/Spinner";
import { Modal } from "./components/Modal";
import { ToastProvider, useToast } from "./components/Toast";
import { Dropdown } from "./components/Dropdown";
import { Tabs } from "./components/Tabs";
import { Tooltip } from "./components/Tooltip";

export function Preview() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // small demo component that uses the Toast context
  function ToastDemo() {
    const { push } = useToast();

    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={() => push({ title: "Info", description: "This is an info toast", variant: "info" })}>
          Show Info Toast
        </Button>
        <Button variant="outline" onClick={() => push({ title: "Success", description: "Saved successfully", variant: "success" })}>
          Show Success
        </Button>
        <Button onClick={() => push({ title: "Error", description: "Something went wrong", variant: "error", duration: 6000 })}>
          Show Error
        </Button>
      </div>
    );
  }

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
        <ToastProvider>
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

        {/* Card Component */}
        <PreviewSection
          title="Card Component"
          description="Flexible card container with header, body, and footer"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="default">
              <CardHeader>
                <h3 className="font-semibold text-gray-900">Default Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 text-sm">
                  A simple card with subtle shadow for depth.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <h3 className="font-semibold text-gray-900">Bordered Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 text-sm">
                  Card with a prominent border for emphasis.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <h3 className="font-semibold text-gray-900">Elevated Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 text-sm">
                  Hover over me! Enhanced shadow on hover.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Explore</Button>
              </CardFooter>
            </Card>
          </div>
        </PreviewSection>

        {/* Input Component */}
        <PreviewSection
          title="Input Component"
          description="Text input with labels, icons, and validation states"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              helperText="We'll never share your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
            />

            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />

            <Input
              label="Amount"
              type="number"
              placeholder="0.00"
              leftIcon={<span className="text-sm">$</span>}
              rightIcon={<span className="text-sm">USD</span>}
            />
          </div>
        </PreviewSection>

        {/* Badge Component */}
        <PreviewSection
          title="Badge Component"
          description="Status indicators and labels in various styles"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Default sizes:</span>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Variants:</span>
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">With status dots:</span>
              <Badge variant="success" dot>Active</Badge>
              <Badge variant="warning" dot>Pending</Badge>
              <Badge variant="error" dot>Failed</Badge>
              <Badge variant="info" dot>Processing</Badge>
            </div>
          </div>
        </PreviewSection>

        {/* Alert Component */}
        <PreviewSection
          title="Alert Component"
          description="Contextual feedback messages for user actions"
        >
          <div className="space-y-4 max-w-3xl">
            <Alert variant="info" title="Information">
              This is an informational message with helpful details.
            </Alert>

            <Alert variant="success" title="Success!">
              Your changes have been saved successfully.
            </Alert>

            <Alert variant="warning" title="Warning">
              Please review your input before proceeding.
            </Alert>

            {showAlert && (
              <Alert 
                variant="error" 
                title="Error" 
                onClose={() => setShowAlert(false)}
              >
                An error occurred while processing your request. Click the X to dismiss.
              </Alert>
            )}
            
            {!showAlert && (
              <Button onClick={() => setShowAlert(true)} size="sm">
                Show dismissible alert
              </Button>
            )}
          </div>
        </PreviewSection>

        {/* Avatar Component */}
        <PreviewSection
          title="Avatar Component"
          description="User profile pictures with fallbacks and status indicators"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm text-gray-600 w-full">Sizes:</span>
              <Avatar size="sm" fallback="SM" />
              <Avatar size="md" fallback="MD" />
              <Avatar size="lg" fallback="LG" />
              <Avatar size="xl" fallback="XL" />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm text-gray-600 w-full">With status:</span>
              <Avatar fallback="AK" status="online" />
              <Avatar fallback="JD" status="busy" />
              <Avatar fallback="SM" status="away" />
              <Avatar fallback="RL" status="offline" />
            </div>

            <div className="space-y-2">
              <span className="text-sm text-gray-600 block">Avatar Group:</span>
              <AvatarGroup max={4}>
                <Avatar fallback="AB" />
                <Avatar fallback="CD" />
                <Avatar fallback="EF" />
                <Avatar fallback="GH" />
                <Avatar fallback="IJ" />
                <Avatar fallback="KL" />
              </AvatarGroup>
            </div>
          </div>
        </PreviewSection>

        {/* Switch Component */}
        <PreviewSection
          title="Switch Component"
          description="Toggle switches for binary options"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-6 items-center">
              <Switch size="sm" label="Small switch" />
              <Switch size="md" label="Medium switch" defaultChecked />
              <Switch size="lg" label="Large switch" />
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <Switch 
                label="Enable notifications" 
                checked={isEnabled}
                onChange={setIsEnabled}
              />
              <Switch label="Disabled switch" disabled />
              <Switch label="Disabled (on)" disabled defaultChecked />
            </div>

            <Card variant="bordered" className="max-w-md">
              <CardBody>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Dark Mode</span>
                    <Switch size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email Notifications</span>
                    <Switch size="sm" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Auto-save</span>
                    <Switch size="sm" defaultChecked />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </PreviewSection>

        {/* Spinner Component */}
        <PreviewSection
          title="Spinner Component"
          description="Loading indicators for async operations"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="text-xs text-gray-600 mt-2">Small</p>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <p className="text-xs text-gray-600 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <p className="text-xs text-gray-600 mt-2">Large</p>
              </div>
              <div className="text-center">
                <Spinner size="xl" />
                <p className="text-xs text-gray-600 mt-2">Extra Large</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Button onClick={() => setShowSpinner(true)}>
                Show Loading Overlay
              </Button>
              <Button 
                variant="outline"
                disabled={showSpinner}
                className="inline-flex items-center gap-2"
              >
                {showSpinner && <Spinner size="sm" />}
                {showSpinner ? "Loading..." : "Simulated Loading"}
              </Button>
            </div>

            <SpinnerOverlay 
              show={showSpinner} 
              message="Processing your request..."
            />
            
            {showSpinner && setTimeout(() => setShowSpinner(false), 2000) && null}
          </div>
        </PreviewSection>

        {/* Modal, Toast, Dropdown, Tabs, Tooltip Examples */}

        {/* Modal Component */}
        <PreviewSection title="Modal" description="Accessible modal with overlay">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Button variant="outline" onClick={() => setModalOpen(true)}>Open (outline)</Button>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={<span>Welcome to the Modal</span>}>
              <p className="text-sm text-gray-700">This is a simple modal. You can close with Escape or the X button.</p>
              <div className="mt-4 flex gap-2 justify-end">
                <Button onClick={() => setModalOpen(false)}>Close</Button>
                <Button variant="outline" onClick={() => { setModalOpen(false); }}>Dismiss</Button>
              </div>
            </Modal>
          </div>
        </PreviewSection>

        {/* Toast / Toaster Component */}
        <PreviewSection title="Toasts" description="Push transient messages with the Toaster">
          <ToastDemo />
        </PreviewSection>

        {/* Dropdown Component */}
        <PreviewSection title="Dropdown / Menu" description="Simple dropdown with menu items">
          <div className="flex gap-4 items-center">
            <Dropdown trigger={<Button>Open Menu</Button>}>
              <a className="block px-4 py-2 hover:bg-gray-50" href="#">Action 1</a>
              <a className="block px-4 py-2 hover:bg-gray-50" href="#">Action 2</a>
              <div className="border-t my-1" />
              <a className="block px-4 py-2 hover:bg-gray-50" href="#">Settings</a>
            </Dropdown>

            <Dropdown trigger={<Button variant="outline">Profile</Button>} align="right">
              <a className="block px-4 py-2 hover:bg-gray-50" href="#">Your profile</a>
              <a className="block px-4 py-2 hover:bg-gray-50" href="#">Sign out</a>
            </Dropdown>
          </div>
        </PreviewSection>

        {/* Tabs Component */}
        <PreviewSection title="Tabs" description="Keyboard-friendly tabs with panels">
          <div className="max-w-2xl">
            <Tabs>
              <Tabs.List>
                <Tabs.Trigger index={0}>Overview</Tabs.Trigger>
                <Tabs.Trigger index={1}>Details</Tabs.Trigger>
                <Tabs.Trigger index={2}>Activity</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4">
                <Tabs.Panel index={0}>
                  <p className="text-sm text-gray-700">Overview content goes here.</p>
                </Tabs.Panel>
                <Tabs.Panel index={1}>
                  <p className="text-sm text-gray-700">Details content goes here.</p>
                </Tabs.Panel>
                <Tabs.Panel index={2}>
                  <p className="text-sm text-gray-700">Activity content goes here.</p>
                </Tabs.Panel>
              </div>
            </Tabs>
          </div>
        </PreviewSection>

        {/* Tooltip Component */}
        <PreviewSection title="Tooltip" description="Small hover/focus hints">
          <div className="flex gap-4 items-center">
            <Tooltip content="This is a helpful tooltip">
              <Button>Hover me</Button>
            </Tooltip>

            <Tooltip side="right" content={<span>Right side tooltip</span>}>
              <Button variant="outline">Hover (right)</Button>
            </Tooltip>
          </div>
        </PreviewSection>

        {/* Combination Example */}
        <PreviewSection
          title="Real-World Example"
          description="Components working together in a realistic scenario"
        >
          <div className="max-w-2xl">
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar fallback="AB" status="online" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Arpit Bhalla</h3>
                      <Badge variant="success" size="sm">Active</Badge>
                    </div>
                  </div>
                  <Switch size="sm" defaultChecked />
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                <Input 
                  label="Project Name"
                  placeholder="Enter project name"
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  }
                />
                <Alert variant="info">
                  This project will be visible to all team members.
                </Alert>
              </CardBody>
              <CardFooter className="flex gap-2">
                <Button>Create Project</Button>
                <Button variant="outline">Cancel</Button>
              </CardFooter>
            </Card>
          </div>
        </PreviewSection>
        </ToastProvider>
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
