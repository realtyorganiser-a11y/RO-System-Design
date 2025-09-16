import { Card } from "../ui/card";

const colorGroups = [
  {
    name: "Primary Green Shades",
    colors: [
      { name: "Green 900", hex: "#018323", usage: "Primary actions, active states" },
      { name: "Green 800", hex: "#000923", usage: "Hover states, emphasis" },
      { name: "Green 600", hex: "#00C928", usage: "Interactive elements" },
      { name: "Green 200", hex: "#6AFF92", usage: "Light backgrounds" },
      { name: "Green 100", hex: "#ABFFC1", usage: "Subtle backgrounds" },
      { name: "Green 50", hex: "#EDFFF1", usage: "Lightest tint" },
    ]
  },
  {
    name: "Semantic Colors",
    colors: [
      { name: "Success", hex: "#00C928", usage: "Success states, confirmations" },
      { name: "Warning", hex: "#FFC107", usage: "Warning states, cautions" },
      { name: "Error", hex: "#FF0000", usage: "Error states, destructive actions" },
      { name: "Info", hex: "#4F3BFF", usage: "Informational content" },
    ]
  },
  {
    name: "Neutrals (Light Mode)",
    colors: [
      { name: "White", hex: "#FFFFFF", usage: "Background, cards" },
      { name: "Gray 50", hex: "#3A3A3A", usage: "Text, headings" },
      { name: "Gray 100", hex: "#FFFFFF", usage: "Secondary text" },
      { name: "Gray 200", hex: "#1F1F1F", usage: "Borders, dividers" },
      { name: "Gray 300", hex: "#FAFAFA", usage: "Input backgrounds" },
      { name: "Gray 400", hex: "#4B4B4B", usage: "Disabled text" },
      { name: "Gray 500", hex: "#8E8E8E", usage: "Placeholder text" },
    ]
  },
  {
    name: "Dark Mode",
    colors: [
      { name: "Dark 900", hex: "#181A1B", usage: "Background" },
      { name: "Dark 800", hex: "#1F1F1F", usage: "Card backgrounds" },
      { name: "Dark 700", hex: "#9F9F9E", usage: "Secondary text" },
      { name: "Dark 600", hex: "#3A3A3A", usage: "Borders" },
    ]
  }
];

export function ColorPalette() {
  return (
    <div className="space-y-8">
      {colorGroups.map((group) => (
        <div key={group.name}>
          <h3 className="mb-4">{group.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <Card key={color.name} className="p-0 overflow-hidden border border-border">
                <div 
                  className="h-20 w-full" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-3">
                  <div className="text-sm font-medium">{color.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{color.hex}</div>
                  <div className="text-xs text-muted-foreground mt-1">{color.usage}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}