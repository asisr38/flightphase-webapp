"use client"

import { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface InquiryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  programType?: string
}

export function InquiryModal({ open, onOpenChange, programType = "General" }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    programType: programType,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields")
      return
    }
    
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }
      
      toast.success("Your inquiry has been submitted successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        programType: programType,
      })
      onOpenChange(false)
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      toast.error("Failed to submit inquiry. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inquire about {programType} Training</DialogTitle>
          <DialogDescription>
            Fill out the form below to get more information about our {programType} training program.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="required">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="required">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px]"
                placeholder="Tell us about your training goals and any questions you have"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 