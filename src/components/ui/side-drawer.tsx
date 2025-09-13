"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

const SideDrawer = ({
  direction = "right",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: "left" | "right"
}) => (
  <DrawerPrimitive.Root
    direction={direction}
    {...props}
  />
)
SideDrawer.displayName = "SideDrawer"

const SideDrawerTrigger = DrawerPrimitive.Trigger

const SideDrawerPortal = DrawerPrimitive.Portal

const SideDrawerClose = DrawerPrimitive.Close

const SideDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
SideDrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const SideDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    side?: "left" | "right"
  }
>(({ className, children, side = "right", ...props }, ref) => (
  <SideDrawerPortal>
    <SideDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-0 z-50 flex h-full w-[400px] flex-col border bg-background shadow-lg",
        side === "right" ? "right-0" : "left-0",
        className
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </SideDrawerPortal>
))
SideDrawerContent.displayName = "SideDrawerContent"

const SideDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
)
SideDrawerHeader.displayName = "SideDrawerHeader"

const SideDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6", className)} {...props} />
)
SideDrawerFooter.displayName = "SideDrawerFooter"

const SideDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
SideDrawerTitle.displayName = DrawerPrimitive.Title.displayName

const SideDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SideDrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  SideDrawer,
  SideDrawerPortal,
  SideDrawerOverlay,
  SideDrawerTrigger,
  SideDrawerClose,
  SideDrawerContent,
  SideDrawerHeader,
  SideDrawerFooter,
  SideDrawerTitle,
  SideDrawerDescription,
}
