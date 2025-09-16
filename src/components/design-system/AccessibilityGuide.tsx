import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import { CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

const accessibilityChecklist = [
  {
    category: "Color & Contrast",
    items: [
      { text: "Text has minimum 4.5:1 contrast ratio", status: "good" },
      { text: "UI elements have minimum 3:1 contrast ratio", status: "good" },
      { text: "Color is not the only way to convey information", status: "good" },
      { text: "Focus indicators are clearly visible", status: "warning" },
    ]
  },
  {
    category: "Keyboard Navigation",
    items: [
      { text: "All interactive elements are keyboard accessible", status: "good" },
      { text: "Tab order is logical and predictable", status: "good" },
      { text: "Skip links are provided for main content", status: "warning" },
      { text: "Keyboard traps are avoided", status: "good" },
    ]
  },
  {
    category: "Screen Reader Support",
    items: [
      { text: "All images have appropriate alt text", status: "good" },
      { text: "Form labels are properly associated", status: "good" },
      { text: "ARIA labels are used where needed", status: "warning" },
      { text: "Heading structure is logical (h1, h2, h3...)", status: "error" },
    ]
  },
  {
    category: "Interaction States",
    items: [
      { text: "Hover states are clearly defined", status: "good" },
      { text: "Focus states are visible and consistent", status: "good" },
      { text: "Active states provide feedback", status: "good" },
      { text: "Disabled states are clearly indicated", status: "warning" },
    ]
  }
];

const usageGuidelines = [
  {
    component: "Buttons",
    dos: [
      "Use descriptive text that explains the action",
      "Maintain consistent padding and spacing",
      "Provide clear focus and hover states",
      "Use appropriate color contrast"
    ],
    donts: [
      "Don't use only icons without text labels",
      "Don't make buttons too small (minimum 44px touch target)",
      "Don't use low contrast colors",
      "Don't disable buttons without explanation"
    ]
  },
  {
    component: "Forms",
    dos: [
      "Always associate labels with form controls",
      "Provide clear error messages",
      "Use fieldsets for grouped controls",
      "Include helper text for complex fields"
    ],
    donts: [
      "Don't use placeholder text as labels",
      "Don't rely only on color for validation",
      "Don't auto-submit forms without warning",
      "Don't hide required field indicators"
    ]
  },
  {
    component: "Navigation",
    dos: [
      "Provide clear navigation landmarks",
      "Use consistent navigation patterns",
      "Include breadcrumbs for deep navigation",
      "Mark current page in navigation"
    ],
    donts: [
      "Don't create keyboard traps in navigation",
      "Don't use unclear or ambiguous link text",
      "Don't open links in new windows without warning",
      "Don't rely only on hover for sub-navigation"
    ]
  }
];

export function AccessibilityGuide() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Info className="w-4 h-4 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-12">
      {/* Accessibility Checklist */}
      <section>
        <h3 className="mb-6">Accessibility Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accessibilityChecklist.map((category) => (
            <Card key={category.category} className="p-6">
              <h4 className="mb-4">{category.category}</h4>
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {getStatusIcon(item.status)}
                    <span className="text-sm flex-1">{item.text}</span>
                    <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* WCAG Compliance Levels */}
      <section>
        <h3 className="mb-6">WCAG 2.1 Compliance Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-bronze-500 text-white">Level A</Badge>
              <h4>Minimum</h4>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Keyboard accessibility</li>
              <li>• Alt text for images</li>
              <li>• Form labels</li>
              <li>• Logical heading structure</li>
              <li>• Basic color contrast</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-silver-500 text-white">Level AA</Badge>
              <h4>Standard</h4>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Enhanced contrast ratios (4.5:1)</li>
              <li>• Resizable text up to 200%</li>
              <li>• Focus indicators</li>
              <li>• Skip navigation links</li>
              <li>• Error identification</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gold-500 text-white">Level AAA</Badge>
              <h4>Enhanced</h4>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Higher contrast ratios (7:1)</li>
              <li>• Context-sensitive help</li>
              <li>• No timing restrictions</li>
              <li>• Advanced error handling</li>
              <li>• Language identification</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h3 className="mb-6">Accessible Component Examples</h3>
        <div className="space-y-8">
          {/* Form Example */}
          <Card className="p-6">
            <h4 className="mb-4">Accessible Form</h4>
            <div className="max-w-md space-y-4">
              <div>
                <Label htmlFor="accessible-email" className="text-sm font-medium">
                  Email Address <span className="text-red-500" aria-label="required">*</span>
                </Label>
                <Input 
                  id="accessible-email" 
                  type="email" 
                  placeholder="Enter your email"
                  aria-describedby="email-help"
                  className="mt-1"
                />
                <div id="email-help" className="text-xs text-muted-foreground mt-1">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <Button className="w-full" aria-describedby="submit-help">
                Subscribe to Newsletter
              </Button>
              <div id="submit-help" className="text-xs text-muted-foreground">
                By clicking subscribe, you agree to our terms of service.
              </div>
            </div>
          </Card>

          {/* Navigation Example */}
          <Card className="p-6">
            <h4 className="mb-4">Accessible Navigation</h4>
            <nav aria-label="Main navigation" className="border rounded-lg p-4">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#" 
                    className="text-green-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </nav>
          </Card>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h3 className="mb-6">Component Usage Guidelines</h3>
        <div className="space-y-6">
          {usageGuidelines.map((guideline) => (
            <Card key={guideline.component} className="p-6">
              <h4 className="mb-4">{guideline.component}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Do's
                  </h5>
                  <ul className="space-y-2">
                    {guideline.dos.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Don'ts
                  </h5>
                  <ul className="space-y-2">
                    {guideline.donts.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testing Tools */}
      <section>
        <h3 className="mb-6">Accessibility Testing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Automated Testing Tools</h4>
            <div className="space-y-3">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>axe DevTools:</strong> Browser extension for automated accessibility testing
                </AlertDescription>
              </Alert>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>WAVE:</strong> Web accessibility evaluation tool
                </AlertDescription>
              </Alert>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Lighthouse:</strong> Built-in Chrome accessibility audit
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Manual Testing</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <strong>Keyboard Navigation:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Tab through all interactive elements</li>
                  <li>• Use arrow keys in menus/lists</li>
                  <li>• Test Enter and Space for activation</li>
                  <li>• Check Escape key functionality</li>
                </ul>
              </div>
              <div className="text-sm">
                <strong>Screen Reader Testing:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Test with NVDA (Windows)</li>
                  <li>• Test with VoiceOver (Mac)</li>
                  <li>• Verify content reading order</li>
                  <li>• Check landmark navigation</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}