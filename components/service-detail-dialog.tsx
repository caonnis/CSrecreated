"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceDetail {
  title: string
  icon: LucideIcon
  overview: string
  whatWeOffer: string
  keyBenefits: string[]
}

interface ServiceDetailDialogProps {
  service: ServiceDetail | null
  isOpen: boolean
  onClose: () => void
}

export function ServiceDetailDialog({ service, isOpen, onClose }: ServiceDetailDialogProps) {
  // Added console.log for debugging
  console.log("ServiceDetailDialog rendered. isOpen:", isOpen, "service:", service?.title)

  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 bg-card-bg border-card-border rounded-xl overflow-hidden">
        <DialogHeader className="bg-gradient-to-r from-purple-accent to-pink-accent p-6 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white/20">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold text-white">{service.title}</DialogTitle>
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="p-6 text-text-light space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Overview</h3>
            <DialogDescription className="text-text-muted">{service.overview}</DialogDescription>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">What We Offer</h3>
            <DialogDescription className="text-text-muted">{service.whatWeOffer}</DialogDescription>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Key Benefits</h3>
            <ul className="space-y-2">
              {service.keyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-text-muted">
                  <CheckCircle className="w-5 h-5 text-purple-accent mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-6 flex justify-end gap-4 border-t border-card-border">
          <Button className="bg-gradient-to-r from-purple-accent to-pink-accent text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-pink-accent hover:to-purple-accent transition-all shadow-lg">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-2 border-purple-accent text-purple-accent px-6 py-3 rounded-lg text-base font-semibold hover:bg-purple-accent hover:text-white transition-colors shadow-lg bg-transparent"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
