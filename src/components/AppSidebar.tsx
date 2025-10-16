import { NavLink, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, Maximize, MessageSquare, DollarSign, BookOpen, History, Mail, Users, Globe, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuItems = [
  {
    section: "START HERE",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    section: "PLAYGROUND",
    items: [
      { title: "Optimize Prompt", url: "/optimize-prompt", icon: Maximize },
      { title: "Reveal Prompt", url: "/reveal-prompt", icon: MessageSquare },
    ],
  },
  {
    section: "SUPPORT",
    items: [
      { title: "Pricing & FAQ", url: "/pricing", icon: DollarSign },
      {
        title: "Resources",
        icon: BookOpen,
        subItems: [
          { title: "Documentation", url: "/documentation" },
          { title: "Roadmap", url: "/Roadmap", badge: "(4.1.2)" },
          { title: "Contact Us", url: "/contact" },
        ],
      },
    ],
  },
  {
    section: "COMMUNITY",
    items: [
      { title: "Community Feed", url: "/community", icon: Users },
      { title: "Supported Models", url: "/models", icon: Globe },
      { title: "Network Monitor", url: "/network_monitor", icon: Globe },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-24" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-muted">
        <div>
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 p-3 text-xl font-medium  ${isCollapsed ? "justify-center" : ""}`}>
              {!isCollapsed ? "REVEAL PROMPT" : "R"}
            </div>
            <SidebarTrigger>
              <ChevronLeft className="h-5 w-5 z-100" />
            </SidebarTrigger>
          </div>
          <hr className="border-t border-grey my-2 w-full" />
          <div>
            {menuItems.map((section) => (
              <SidebarGroup key={section.section}>
                {!isCollapsed && (
                  <SidebarGroupLabel className="text-xs text-muted-foreground  font-semibold  px-3 mb-2">
                    {section.section}
                  </SidebarGroupLabel>
                )}
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) =>
                      item.subItems ? (
                        <Collapsible key={item.title} className=" text-gray-400 group/collapsible" defaultOpen>
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton
                                className={`w-full ${isCollapsed ? "justify-center" : "justify-between"}`}
                              >
                                <div className="flex items-center gap-3">
                                  {item.icon && <item.icon className="h-4 w-4 text-gray-400 " />}
                                  {!isCollapsed && <span>{item.title}</span>}
                                </div>
                                {!isCollapsed && (
                                  <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                )}
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            {!isCollapsed && (
                              <CollapsibleContent>
                                <SidebarMenu className="ml-4 border-l text-gray-400 border-border pl-4 mt-1">
                                  {item.subItems.map((subItem) => (
                                    <SidebarMenuItem key={subItem.title}>
                                      <SidebarMenuButton asChild isActive={isActive(subItem.url)}>
                                        <NavLink to={subItem.url} className="flex items-center gap-2">
                                          <span className="text-sm">- {subItem.title}</span>
                                          {subItem.badge && (
                                            <span className="text-xs text-primary">{subItem.badge}</span>
                                          )}
                                        </NavLink>
                                      </SidebarMenuButton>
                                    </SidebarMenuItem>
                                  ))}
                                </SidebarMenu>
                              </CollapsibleContent>
                            )}
                          </SidebarMenuItem>
                        </Collapsible>
                      ) : (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)}>
                            <NavLink to={item.url} className="flex text-gray-400 items-center gap-3">
                              {item.icon && <item.icon className="h-4 w-4" />}
                              {!isCollapsed && <span>{item.title}</span>}
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}

          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
