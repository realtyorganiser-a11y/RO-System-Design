import { useState } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ColorPalette } from "./components/design-system/ColorPalette";
import { TypographyScale } from "./components/design-system/TypographyScale";
import { SpacingSystem } from "./components/design-system/SpacingSystem";
import { ComponentShowcase } from "./components/design-system/ComponentShowcase";
import { DataVisualization } from "./components/design-system/DataVisualization";
import { LayoutTemplates } from "./components/design-system/LayoutTemplates";
import { AccessibilityGuide } from "./components/design-system/AccessibilityGuide";
import { AdvancedComponents } from "./components/design-system/AdvancedComponents";
import realtyOrganiserLogo from 'figma:asset/28e8bca619786edb63859efe11b8ae403a95b7b6.png';
import { motion, AnimatePresence } from "motion/react";
import { 
  Palette, 
  Type, 
  Ruler, 
  Component, 
  BarChart3, 
  Layout, 
  Shield, 
  Sparkles,
  Moon,
  Sun,
  Github,
  BookOpen
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: "colors", label: "Colors", icon: Palette, component: ColorPalette },
    { id: "typography", label: "Typography", icon: Type, component: TypographyScale },
    { id: "spacing", label: "Spacing", icon: Ruler, component: SpacingSystem },
    { id: "components", label: "Components", icon: Component, component: ComponentShowcase },
    { id: "advanced", label: "Advanced", icon: Sparkles, component: AdvancedComponents },
    { id: "data-viz", label: "Data Visualization", icon: BarChart3, component: DataVisualization },
    { id: "layouts", label: "Layout Templates", icon: Layout, component: LayoutTemplates },
    { id: "accessibility", label: "Accessibility", icon: Shield, component: AccessibilityGuide },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.img 
                src={realtyOrganiserLogo} 
                alt="Realty Organiser" 
                className="w-8 h-8" 
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <div>
                <h1 className="font-bold">Realty Organiser Design System</h1>
                <p className="text-xs text-muted-foreground">Enterprise-grade UI components & patterns</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <Sun className="h-4 w-4" />
              </motion.div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
              />
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <Moon className="h-4 w-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction */}
        <motion.div 
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl">
            <motion.h1 
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Realty Organiser Design System
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              A comprehensive design system built for enterprise CRM applications, featuring accessible components, 
              consistent patterns, and professional aesthetics optimized for real estate and sales workflows.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { text: "Production Ready", bg: "bg-green-100", color: "text-green-800" },
                { text: "WCAG 2.1 AA", bg: "bg-blue-100", color: "text-blue-800" },
                { text: "Dark Mode", bg: "bg-purple-100", color: "text-purple-800" },
                { text: "Mobile First", bg: "bg-orange-100", color: "text-orange-800" },
                { text: "TypeScript", bg: "bg-pink-100", color: "text-pink-800" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge className={`${badge.bg} ${badge.color} transition-all duration-200`}>
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-8 mb-12 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Design Principles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, color: "green", title: "Accessible", desc: "WCAG 2.1 AA compliant with keyboard navigation and screen reader support." },
                { icon: Component, color: "blue", title: "Consistent", desc: "Unified design language with systematic spacing, colors, and typography." },
                { icon: Layout, color: "purple", title: "Scalable", desc: "Modular components that work across different screen sizes and contexts." },
                { icon: Sparkles, color: "orange", title: "Efficient", desc: "Optimized for developer productivity with clear documentation and examples." }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="text-center space-y-3 group cursor-pointer"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${principle.color}-100 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <principle.icon className={`w-6 h-6 text-${principle.color}-600`} />
                    </motion.div>
                  </motion.div>
                  <h3 className="group-hover:text-primary transition-colors duration-200">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Navigation & Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Tabs defaultValue="colors" className="space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto p-1 bg-muted/50 backdrop-blur">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.4 + index * 0.05,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TabsTrigger 
                      value={section.id}
                      className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-green-100 data-[state=active]:text-green-800 transition-all duration-200 hover:bg-muted/80"
                    >
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <section.icon className="w-4 h-4" />
                      </motion.div>
                      <span className="text-xs">{section.label}</span>
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              {sections.map((section) => (
                <TabsContent key={section.id} value={section.id} className="space-y-8">
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <section.icon className="w-5 h-5 text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <h2>{section.label}</h2>
                        <p className="text-muted-foreground">
                          {section.id === "colors" && "Brand colors, semantic colors, and theme tokens"}
                          {section.id === "typography" && "Font system, scales, and text styles"}
                          {section.id === "spacing" && "Layout spacing, border radius, and elevation"}
                          {section.id === "components" && "Core UI components and interactive elements"}
                          {section.id === "advanced" && "Loading states, notifications, and micro-interactions"}
                          {section.id === "data-viz" && "Charts, KPIs, and dashboard components"}
                          {section.id === "layouts" && "Page templates and responsive patterns"}
                          {section.id === "accessibility" && "Guidelines and testing for inclusive design"}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <section.component />
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-24 pt-12 border-t"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.div 
            className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <p>© 2024 Realty Organiser Design System. Built with React, TypeScript, and Tailwind CSS.</p>
          </motion.div>
        </motion.footer>
      </main>
    </motion.div>
  );
}