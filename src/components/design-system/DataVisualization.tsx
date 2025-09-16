import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { motion } from "motion/react";
import { TrendingUp, TrendingDown, IndianRupee, Users, Target, BarChart3 } from "lucide-react";

const salesData = [
  { month: 'Jan', value: 45000, leads: 120 },
  { month: 'Feb', value: 52000, leads: 135 },
  { month: 'Mar', value: 48000, leads: 128 },
  { month: 'Apr', value: 61000, leads: 155 },
  { month: 'May', value: 55000, leads: 142 },
  { month: 'Jun', value: 67000, leads: 168 },
];

const pieData = [
  { name: 'Hot Leads', value: 35, color: '#ef4444' },
  { name: 'Warm Leads', value: 45, color: '#f97316' },
  { name: 'Cold Leads', value: 20, color: '#3b82f6' },
];

const kpiData = [
  { title: "Total Revenue", value: "₹2,65,60,000", change: "+12.5%", trend: "up", icon: IndianRupee, gradient: "from-green-500 to-emerald-600" },
  { title: "Active Leads", value: "748", change: "+8.2%", trend: "up", icon: Users, gradient: "from-blue-500 to-cyan-600" },
  { title: "Conversion Rate", value: "24.3%", change: "-2.1%", trend: "down", icon: Target, gradient: "from-purple-500 to-violet-600" },
  { title: "Avg. Deal Size", value: "₹44,25,420", change: "+5.7%", trend: "up", icon: BarChart3, gradient: "from-orange-500 to-red-500" },
];

export function DataVisualization() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          KPI Cards
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${kpi.gradient}`} />
                
                <CardHeader className="pb-2 pt-3 px-4">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-sm">{kpi.title}</CardDescription>
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-r ${kpi.gradient} text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <kpi.icon className="w-4 h-4" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <CardTitle className="text-2xl">{kpi.value}</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-3">
                  <motion.div 
                    className={`text-sm flex items-center ${
                      kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.span 
                      className="mr-1"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {kpi.trend === 'up' ? 
                        <TrendingUp className="w-4 h-4" /> : 
                        <TrendingDown className="w-4 h-4" />
                      }
                    </motion.span>
                    {kpi.change} from last month
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Data Visualization Charts
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -3 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-green-50/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <BarChart3 className="w-4 h-4 text-white" />
                  </motion.div>
                  Monthly Sales
                </CardTitle>
                <CardDescription>Revenue performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Bar dataKey="value" fill="url(#greenGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Line Chart */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -3 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-blue-50/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </motion.div>
                  Lead Generation
                </CardTitle>
                <CardDescription>Number of leads generated monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      formatter={(value) => [value, 'Leads']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="leads" 
                      stroke="url(#blueGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, fill: '#1d4ed8' }}
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ y: -3 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-purple-50/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Target className="w-4 h-4 text-white" />
                  </motion.div>
                  Lead Distribution
                </CardTitle>
                <CardDescription>Breakdown of leads by temperature</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Area Chart */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ y: -3 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-orange-50/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <IndianRupee className="w-4 h-4 text-white" />
                  </motion.div>
                  Revenue Trend
                </CardTitle>
                <CardDescription>Cumulative revenue growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#f97316" 
                      fill="url(#orangeGradient)" 
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#f97316" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Layout Preview */}
      <section>
        <motion.h3 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Dashboard Layout Template
        </motion.h3>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/10">
            <div className="space-y-6">
              {/* Header */}
              <motion.div 
                className="flex justify-between items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                <div>
                  <h2>Sales Dashboard</h2>
                  <p className="text-muted-foreground">Real-time insights into your sales performance</p>
                </div>
                <motion.div 
                  className="flex gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <select className="px-3 py-1 text-sm border rounded-lg bg-background/50 backdrop-blur transition-all duration-200 hover:shadow-md">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>This year</option>
                  </select>
                </motion.div>
              </motion.div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {kpiData.slice(0, 4).map((kpi, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur p-4 rounded-lg border border-muted/20 hover:shadow-md transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-muted-foreground">{kpi.title}</div>
                      <motion.div 
                        className={`p-1 rounded bg-gradient-to-r ${kpi.gradient} text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <kpi.icon className="w-3 h-3" />
                      </motion.div>
                    </div>
                    <div className="text-xl font-semibold">{kpi.value}</div>
                    <div className={`text-xs flex items-center ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.trend === 'up' ? 
                        <TrendingUp className="w-3 h-3 mr-1" /> : 
                        <TrendingDown className="w-3 h-3 mr-1" />
                      }
                      {kpi.change}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholders */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-48"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <motion.div 
                  className="lg:col-span-2 bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur rounded-lg flex items-center justify-center border border-muted/20 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-muted-foreground">Main Chart Area</span>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur rounded-lg flex items-center justify-center border border-muted/20 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-muted-foreground">Secondary Chart</span>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}