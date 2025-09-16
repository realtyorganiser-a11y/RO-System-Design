import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { useState } from "react";
import { 
  CalendarIcon, 
  Clock, 
  FileText, 
  HelpCircle, 
  Search, 
  Users, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  XCircle,
  Upload,
  Download,
  RefreshCw,
  Loader2
} from "lucide-react";

export function AdvancedComponents() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-12">
      {/* Loading & Empty States */}
      <section>
        <h3 className="mb-6">Loading & Empty States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Loading States */}
          <Card className="p-6">
            <h4 className="mb-4">Loading States</h4>
            <div className="space-y-4">
              <div>
                <Button 
                  onClick={handleAsyncAction} 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Start Process'
                  )}
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Content Loading</div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Upload Progress</div>
                <Progress value={uploadProgress} className="w-full" />
                <div className="flex justify-between">
                  <Button 
                    onClick={simulateUpload} 
                    size="sm" 
                    variant="outline"
                    disabled={uploadProgress > 0 && uploadProgress < 100}
                  >
                    <Upload className="mr-2 h-3 w-3" />
                    Upload File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Empty States */}
          <Card className="p-6">
            <h4 className="mb-4">Empty States</h4>
            <div className="text-center py-8">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
              <h4 className="mb-2">No contacts found</h4>
              <p className="text-sm text-muted-foreground mb-4">
                You haven't added any contacts yet. Start by creating your first contact.
              </p>
              <Button>Add Contact</Button>
            </div>
          </Card>

          {/* Error States */}
          <Card className="p-6">
            <h4 className="mb-4">Error States</h4>
            <div className="space-y-4">
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  Failed to load data. Please try again.
                </AlertDescription>
              </Alert>
              
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  Your session will expire in 5 minutes.
                </AlertDescription>
              </Alert>

              <div className="text-center py-4">
                <XCircle className="mx-auto h-8 w-8 text-red-500 mb-2" />
                <div className="text-sm">Connection failed</div>
                <Button variant="outline" size="sm" className="mt-2">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Retry
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Advanced Inputs */}
      <section>
        <h3 className="mb-6">Advanced Input Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search with Command Palette */}
          <Card className="p-6">
            <h4 className="mb-4">Command Palette Search</h4>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <Search className="mr-2 h-4 w-4" />
                  Search commands...
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="start">
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Add Contact</span>
                      </CommandItem>
                      <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Schedule Meeting</span>
                      </CommandItem>
                      <CommandItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Create Report</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </Card>

          {/* Date Picker */}
          <Card className="p-6">
            <h4 className="mb-4">Date Picker</h4>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toLocaleDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </Card>
        </div>
      </section>

      {/* Notification System */}
      <section>
        <h3 className="mb-6">Notification System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Contact saved successfully!
            </AlertDescription>
          </Alert>
          
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              New features available in settings.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              Please verify your email address.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-red-200 bg-red-50">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Failed to delete contact.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Tooltips & Help System */}
      <section>
        <h3 className="mb-6">Help System & Tooltips</h3>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h4 className="mb-4">Contextual Help</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TooltipProvider>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Lead Score</label>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Calculated based on engagement and fit</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input placeholder="Enter score (0-100)" />
                  </div>
                </TooltipProvider>

                <TooltipProvider>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Priority</label>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>High priority leads get faster response times</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </TooltipProvider>

                <TooltipProvider>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Follow-up Date</label>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Automatic reminder will be set for this date</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input type="date" />
                  </div>
                </TooltipProvider>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Progressive Disclosure</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  Basic Information
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span>
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Contact Details
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span>
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Business Information
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Optional</span>
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Advanced Settings
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Not Started</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Status Indicators */}
      <section>
        <h3 className="mb-6">Status Indicators & Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="mb-4">System Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Email Service</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Database</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">SMS Service</span>
                </div>
                <Badge className="bg-red-100 text-red-800">Down</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="mb-4">Activity Indicators</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-sm font-medium">Pending Tasks</div>
                  <div className="text-xs text-muted-foreground">3 items require attention</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Sync Complete</div>
                  <div className="text-xs text-muted-foreground">Last updated 2 minutes ago</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Download className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Export Ready</div>
                  <div className="text-xs text-muted-foreground">Report.xlsx available for download</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Micro-interactions */}
      <section>
        <h3 className="mb-6">Micro-interactions</h3>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="mb-4">Hover Effects</h4>
              <Button 
                className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
                variant="outline"
              >
                Hover me
              </Button>
            </div>

            <div className="text-center">
              <h4 className="mb-4">Loading Animation</h4>
              <Button disabled className="cursor-not-allowed">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </Button>
            </div>

            <div className="text-center">
              <h4 className="mb-4">Success Feedback</h4>
              <Button 
                className="transition-all duration-200 hover:bg-green-600"
                onClick={() => {
                  // Simulate success state
                  const btn = document.getElementById('success-btn');
                  if (btn) {
                    btn.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Saved!';
                    setTimeout(() => {
                      btn.innerHTML = 'Save Changes';
                    }, 2000);
                  }
                }}
              >
                <span id="success-btn">Save Changes</span>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}