import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Progress } from "../ui/progress";
import { Slider } from "../ui/slider";
import { Calendar, CalendarDays, Home, Mail, MessageSquare, Settings, Users } from "lucide-react";
import { useState } from "react";

export function ComponentShowcase() {
  const [progressValue, setProgressValue] = useState(65);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="space-y-12">
      {/* Buttons */}
      <section>
        <h3 className="mb-6">Buttons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Primary</h4>
            <div className="space-y-3">
              <Button className="w-full">Primary Button</Button>
              <Button className="w-full" disabled>Disabled</Button>
            </div>
          </Card>
          <Card className="p-6">
            <h4 className="mb-4">Secondary</h4>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">Secondary Button</Button>
              <Button variant="secondary" className="w-full" disabled>Disabled</Button>
            </div>
          </Card>
          <Card className="p-6">
            <h4 className="mb-4">Outline</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full">Outline Button</Button>
              <Button variant="outline" className="w-full" disabled>Disabled</Button>
            </div>
          </Card>
          <Card className="p-6">
            <h4 className="mb-4">Destructive</h4>
            <div className="space-y-3">
              <Button variant="destructive" className="w-full">Delete</Button>
              <Button variant="destructive" className="w-full" disabled>Disabled</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Form Inputs */}
      <section>
        <h3 className="mb-6">Form Inputs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" placeholder="Enter text here..." />
              </div>
              <div>
                <Label htmlFor="textarea">Textarea</Label>
                <Textarea id="textarea" placeholder="Enter description..." />
              </div>
              <div>
                <Label htmlFor="select">Select Dropdown</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox" />
                <Label htmlFor="checkbox">Checkbox with label</Label>
              </div>
              <RadioGroup defaultValue="option1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1">Radio Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2">Radio Option 2</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-2">
                <Switch id="switch" />
                <Label htmlFor="switch">Switch toggle</Label>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Status Badges */}
      <section>
        <h3 className="mb-6">Status Badges & Chips</h3>
        <Card className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Lead Status</div>
              <div className="space-y-2">
                <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>
                <Badge className="bg-orange-500 hover:bg-orange-600">Warm</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">Cold</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">SLA Status</div>
              <div className="space-y-2">
                <Badge className="bg-red-600 hover:bg-red-700">Breached</Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">On Time</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Activity</div>
              <div className="space-y-2">
                <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
                <Badge className="bg-gray-500 hover:bg-gray-600">Pending</Badge>
                <Badge className="bg-gray-400 hover:bg-gray-500">Inactive</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Avatars */}
      <section>
        <h3 className="mb-6">Avatars</h3>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="text-center space-y-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-xs">With Photo</div>
            </div>
            <div className="text-center space-y-2">
              <Avatar className="w-12 h-12">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div className="text-xs">Initials</div>
            </div>
            <div className="text-center space-y-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-xs">Small</div>
            </div>
            <div className="text-center space-y-2">
              <Avatar className="w-16 h-16">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <div className="text-xs">Large</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Interactive Components */}
      <section>
        <h3 className="mb-6">Interactive Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">Progress & Sliders</h4>
            <div className="space-y-6">
              <div>
                <Label>Progress Bar ({progressValue}%)</Label>
                <Progress value={progressValue} className="mt-2" />
              </div>
              <div>
                <Label>Slider Control</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">Value: {sliderValue[0]}</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h4 className="mb-4">Alert Dialog</h4>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to proceed? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section>
        <h3 className="mb-6">Navigation</h3>
        <Card className="p-6">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Contacts
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Calendar
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">Home content would appear here</div>
            </TabsContent>
            <TabsContent value="contacts" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">Contacts content would appear here</div>
            </TabsContent>
            <TabsContent value="calendar" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">Calendar content would appear here</div>
            </TabsContent>
            <TabsContent value="messages" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">Messages content would appear here</div>
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">Settings content would appear here</div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Data Table */}
      <section>
        <h3 className="mb-6">Data Table</h3>
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>SLA</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-muted-foreground">john@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>
                </TableCell>
                <TableCell>2 hours ago</TableCell>
                <TableCell>
                  <Badge className="bg-green-500 hover:bg-green-600">On Time</Badge>
                </TableCell>
                <TableCell className="text-right">$50,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Adams</div>
                      <div className="text-sm text-muted-foreground">sarah@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Warm</Badge>
                </TableCell>
                <TableCell>1 day ago</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                </TableCell>
                <TableCell className="text-right">$25,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>MB</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Mike Brown</div>
                      <div className="text-sm text-muted-foreground">mike@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Cold</Badge>
                </TableCell>
                <TableCell>3 days ago</TableCell>
                <TableCell>
                  <Badge className="bg-red-600 hover:bg-red-700">Breached</Badge>
                </TableCell>
                <TableCell className="text-right">$10,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}