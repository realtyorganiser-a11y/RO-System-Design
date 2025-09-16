import { Card } from "../ui/card";

const typographyStyles = [
  { name: "H1", size: "32px", weight: "Bold", usage: "Page titles, primary headings", className: "text-[32px] font-bold" },
  { name: "H2", size: "24px", weight: "SemiBold", usage: "Section headings", className: "text-[24px] font-semibold" },
  { name: "H3", size: "20px", weight: "SemiBold", usage: "Subsection headings", className: "text-[20px] font-semibold" },
  { name: "Body", size: "16px", weight: "Regular", usage: "Main content, descriptions", className: "text-[16px] font-normal" },
  { name: "Caption", size: "14px", weight: "Medium", usage: "Labels, metadata", className: "text-[14px] font-medium" },
  { name: "Helper", size: "12px", weight: "Regular", usage: "Helper text, annotations", className: "text-[12px] font-normal" },
];

const fontInfo = {
  primary: "Roboto",
  fallback: "Helvetica Neue, sans-serif",
  weights: ["Regular (400)", "Medium (500)", "SemiBold (600)", "Bold (700)"]
};

export function TypographyScale() {
  return (
    <div className="space-y-8">
      {/* Font Information */}
      <Card className="p-6">
        <h3 className="mb-4">Font Family</h3>
        <div className="space-y-2">
          <div><span className="font-medium">Primary:</span> {fontInfo.primary}</div>
          <div><span className="font-medium">Fallback:</span> {fontInfo.fallback}</div>
          <div className="mt-4">
            <span className="font-medium">Available Weights:</span>
            <ul className="mt-2 space-y-1">
              {fontInfo.weights.map((weight) => (
                <li key={weight} className="text-sm text-muted-foreground ml-4">• {weight}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Typography Scale */}
      <div>
        <h3 className="mb-4">Typography Scale</h3>
        <div className="space-y-4">
          {typographyStyles.map((style) => (
            <Card key={style.name} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className={style.className} style={{ fontFamily: 'Roboto, Helvetica Neue, sans-serif' }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
                <div className="lg:w-64 space-y-1 text-sm">
                  <div className="font-medium">{style.name}</div>
                  <div className="text-muted-foreground">{style.size} / {style.weight}</div>
                  <div className="text-muted-foreground">{style.usage}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}