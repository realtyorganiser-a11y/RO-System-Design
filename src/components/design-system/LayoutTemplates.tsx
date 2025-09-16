import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { motion } from "motion/react";
import { Search, Filter, Plus, Edit, Trash2, Menu, Bell, Settings, User, Building, Mail, Phone } from "lucide-react";

export function LayoutTemplates() {
  return (
    <div className="space-y-12">
      {/* List Page Template */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          List Page Template
        </motion.h3>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-blue-50/10">
            <div className="space-y-6">
              {/* Header */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div>
                  <h2 className="flex items-center gap-2">
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <User className="w-4 h-4 text-white" />
                    </motion.div>
                    Contacts
                  </h2>
                  <p className="text-muted-foreground">Manage your customer relationships</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <motion.div whileHover={{ rotate: 90 }}>
                      <Plus className="w-4 h-4" />
                    </motion.div>
                    Add Contact
                  </Button>
                </motion.div>
              </motion.div>

              {/* Filters & Search */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.div 
                  className="flex-1 relative"
                  whileHover={{ scale: 1.01 }}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search contacts..." className="pl-10 bg-background/50 backdrop-blur border-muted/20" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Select>
                    <SelectTrigger className="w-full sm:w-40 bg-background/50 backdrop-blur border-muted/20">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="hot">Hot</SelectItem>
                      <SelectItem value="warm">Warm</SelectItem>
                      <SelectItem value="cold">Cold</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="flex items-center gap-2 bg-background/50 backdrop-blur border-muted/20">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </motion.div>
              </motion.div>

              {/* Table/List Content */}
              <motion.div 
                className="space-y-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/20 to-muted/10 backdrop-blur rounded-lg border border-muted/20 hover:shadow-md transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">JD</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <div className="font-medium">John Doe {i + 1}</div>
                        <div className="text-sm text-muted-foreground">john{i + 1}@example.com</div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0">
                          Hot
                        </Badge>
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="ghost" size="sm" className="hover:bg-blue-100 hover:text-blue-600">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="ghost" size="sm" className="hover:bg-red-100 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <motion.div 
                className="flex justify-between items-center pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="text-sm text-muted-foreground">
                  Showing 1-10 of 157 contacts
                </div>
                <div className="flex gap-2">
                  {["Previous", "1", "2", "3", "Next"].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant={item === "2" ? "default" : "outline"} 
                        size="sm"
                        className={item === "2" ? "bg-gradient-to-r from-blue-600 to-cyan-600" : ""}
                      >
                        {item}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Detail Page Template */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Detail Page Template
        </motion.h3>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-green-50/10">
            <div className="space-y-6">
              {/* Header with breadcrumb */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <div className="text-sm text-muted-foreground mb-2">
                  Contacts &gt; John Doe
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl">JD</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <h1>John Doe</h1>
                      <p className="text-muted-foreground">Senior Sales Manager</p>
                      <div className="flex items-center gap-2 mt-2">
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 border-0">Hot Lead</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 border-0">Active</Badge>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="bg-background/50 backdrop-blur border-muted/20">Message</Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">Edit Contact</Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                  >
                    <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-background to-muted/10">
                      <h3 className="mb-4 flex items-center gap-2">
                        <motion.div 
                          className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded flex items-center justify-center"
                          whileHover={{ rotate: 5 }}
                        >
                          <User className="w-3 h-3 text-white" />
                        </motion.div>
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Email", value: "john.doe@company.com", icon: Mail },
                          { label: "Phone", value: "+1 (555) 123-4567", icon: Phone },
                          { label: "Company", value: "Acme Corporation", icon: Building },
                          { label: "Position", value: "Senior Sales Manager", icon: User }
                        ].map((item, index) => (
                          <motion.div 
                            key={item.label}
                            className="p-3 rounded-lg bg-gradient-to-r from-muted/20 to-muted/10 hover:shadow-sm transition-all duration-200"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Label className="flex items-center gap-2">
                              <item.icon className="w-4 h-4 text-muted-foreground" />
                              {item.label}
                            </Label>
                            <div className="text-sm mt-1">{item.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.7 }}
                  >
                    <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-background to-muted/10">
                      <h3 className="mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-muted/20 to-muted/10 rounded-lg hover:shadow-sm transition-all duration-200"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.8 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium">Email sent: Follow-up on proposal</div>
                              <div className="text-xs text-muted-foreground">2 hours ago</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                  >
                    <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-background to-muted/10">
                      <h4 className="mb-3">Quick Actions</h4>
                      <div className="space-y-2">
                        {["Schedule Meeting", "Send Email", "Create Task"].map((action, index) => (
                          <motion.div
                            key={action}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              variant="outline" 
                              className="w-full justify-start bg-background/50 backdrop-blur border-muted/20 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                            >
                              {action}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                  >
                    <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-background to-muted/10">
                      <h4 className="mb-3">Deal Information</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Deal Value", value: "₹40,50,000" },
                          { label: "Probability", value: "75%" },
                          { label: "Expected Close", value: "Dec 15, 2024" }
                        ].map((item, index) => (
                          <motion.div 
                            key={item.label}
                            className="p-2 rounded bg-gradient-to-r from-muted/20 to-muted/10"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Label>{item.label}</Label>
                            <div className="font-medium">{item.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Form Layout Template */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          2-Column Form Layout
        </motion.h3>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-purple-50/10">
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.2 }}
              >
                <h2 className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </motion.div>
                  Create New Contact
                </h2>
                <p className="text-muted-foreground">Add a new contact to your CRM</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <motion.div 
                  className="space-y-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  <h3 className="flex items-center gap-2">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                    >
                      <User className="w-3 h-3 text-white" />
                    </motion.div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "firstName", label: "First Name *", placeholder: "John" },
                      { id: "lastName", label: "Last Name *", placeholder: "Doe" }
                    ].map((field, index) => (
                      <motion.div 
                        key={field.id}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 2.4 + index * 0.1 }}
                      >
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input 
                          id={field.id} 
                          placeholder={field.placeholder}
                          className="bg-background/50 backdrop-blur border-muted/20"
                        />
                      </motion.div>
                    ))}
                  </div>
                  {[
                    { id: "email", label: "Email Address *", placeholder: "john@example.com", type: "email" },
                    { id: "phone", label: "Phone Number", placeholder: "+1 (555) 123-4567" }
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.6 + index * 0.1 }}
                    >
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input 
                        id={field.id} 
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-background/50 backdrop-blur border-muted/20"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.8 }}
                  >
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Additional information..."
                      className="bg-background/50 backdrop-blur border-muted/20"
                    />
                  </motion.div>
                </motion.div>

                {/* Right Column */}
                <motion.div 
                  className="space-y-4"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  <h3 className="flex items-center gap-2">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                    >
                      <Building className="w-3 h-3 text-white" />
                    </motion.div>
                    Business Information
                  </h3>
                  {[
                    { id: "company", label: "Company", placeholder: "Acme Corporation" },
                    { id: "position", label: "Position", placeholder: "Sales Manager" }
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.5 + index * 0.1 }}
                    >
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input 
                        id={field.id} 
                        placeholder={field.placeholder}
                        className="bg-background/50 backdrop-blur border-muted/20"
                      />
                    </motion.div>
                  ))}
                  {[
                    { id: "status", label: "Lead Status", options: ["Hot", "Warm", "Cold"] },
                    { id: "source", label: "Lead Source", options: ["Website", "Referral", "Social Media", "Event"] }
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.7 + index * 0.1 }}
                    >
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Select>
                        <SelectTrigger className="bg-background/50 backdrop-blur border-muted/20">
                          <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map(option => (
                            <SelectItem key={option} value={option.toLowerCase().replace(' ', '-')}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Form Actions */}
              <motion.div 
                className="flex justify-end gap-3 pt-6 border-t border-muted/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.9 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="bg-background/50 backdrop-blur border-muted/20">Cancel</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">Create Contact</Button>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Mobile Responsive Layout */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.0 }}
        >
          Mobile Layout Considerations
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.1 }}
          >
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-orange-50/10">
              <h4 className="mb-4 flex items-center gap-2">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <Menu className="w-3 h-3 text-white" />
                </motion.div>
                Mobile Navigation
              </h4>
              <div className="border rounded-lg p-4 bg-gradient-to-br from-muted/20 to-muted/10">
                <motion.div 
                  className="flex justify-between items-center mb-4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 3.2 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                    <span className="font-medium">CRM App</span>
                  </div>
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.1, rotate: 15 }}>
                      <Bell className="w-5 h-5" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 90 }}>
                      <Settings className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="space-y-2 text-sm">
                  {["Dashboard", "Contacts", "Deals", "Calendar", "Reports"].map((item, index) => (
                    <motion.div 
                      key={item}
                      className={`p-2 rounded transition-all duration-200 ${
                        item === "Dashboard" 
                          ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800" 
                          : "hover:bg-muted/50"
                      }`}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 3.3 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-pink-50/10">
              <h4 className="mb-4 flex items-center gap-2">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <User className="w-3 h-3 text-white" />
                </motion.div>
                Mobile Card Layout
              </h4>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="border rounded-lg p-3 bg-gradient-to-r from-muted/20 to-muted/10 hover:shadow-sm transition-all duration-200"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 3.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs">JD</AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium">John Doe</div>
                          <div className="text-xs text-muted-foreground">Acme Corp</div>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-xs border-0">Hot</Badge>
                      </motion.div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last contact: 2 hours ago
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}