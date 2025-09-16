import { Card } from "../ui/card";

const spacingScale = [
  { name: "4px", value: "4px", usage: "Micro spacing, icon padding" },
  { name: "8px", value: "8px", usage: "Small gaps, button padding" },
  { name: "12px", value: "12px", usage: "Form field spacing" },
  { name: "16px", value: "16px", usage: "Component padding, card spacing" },
  { name: "24px", value: "24px", usage: "Section spacing" },
  { name: "32px", value: "32px", usage: "Large gaps between sections" },
  { name: "40px", value: "40px", usage: "Page margins" },
  { name: "48px", value: "48px", usage: "Hero sections, major spacing" },
  { name: "64px", value: "64px", usage: "Extra large spacing" },
];

const borderRadius = [
  { name: "4px", value: "4px", usage: "Small elements, badges" },
  { name: "8px", value: "8px", usage: "Buttons, inputs, cards" },
  { name: "12px", value: "12px", usage: "Large cards, modals" },
  { name: "16px", value: "16px", usage: "Prominent cards" },
  { name: "24px", value: "24px", usage: "Special emphasis" },
];

const shadows = [
  { name: "Level 1", value: "0 1px 3px rgba(0,0,0,0.1)", usage: "Subtle elevation, hover states" },
  { name: "Level 2", value: "0 4px 6px rgba(0,0,0,0.1)", usage: "Cards, dropdowns" },
  { name: "Level 3", value: "0 8px 24px rgba(0,0,0,0.15)", usage: "Modals, floating elements" },
];

export function SpacingSystem() {
  return (
    <div className="space-y-8">
      {/* Spacing Scale */}
      <div>
        <h3 className="mb-4">Spacing Scale (4px Base)</h3>
        <div className="space-y-3">
          {spacingScale.map((spacing) => (
            <Card key={spacing.name} className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium">{spacing.name}</div>
                <div 
                  className="bg-green-500"
                  style={{ width: spacing.value, height: '16px' }}
                />
                <div className="text-sm text-muted-foreground">{spacing.usage}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h3 className="mb-4">Border Radius</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {borderRadius.map((radius) => (
            <Card key={radius.name} className="p-4">
              <div className="space-y-3">
                <div 
                  className="w-16 h-16 bg-green-500"
                  style={{ borderRadius: radius.value }}
                />
                <div>
                  <div className="font-medium">{radius.name}</div>
                  <div className="text-sm text-muted-foreground">{radius.usage}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div>
        <h3 className="mb-4">Elevation (Shadows)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shadows.map((shadow) => (
            <Card key={shadow.name} className="p-6">
              <div className="space-y-4">
                <div 
                  className="w-full h-16 bg-white border rounded-lg flex items-center justify-center"
                  style={{ boxShadow: shadow.value }}
                >
                  <span className="text-sm text-muted-foreground">Sample Element</span>
                </div>
                <div>
                  <div className="font-medium">{shadow.name}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{shadow.value}</div>
                  <div className="text-sm text-muted-foreground">{shadow.usage}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}