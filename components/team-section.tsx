'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TeamSection() {
  const teamMembers = [
    { name: "Dr. Estefania Cuello", title: "Geopolitical & Legal Compliance Advisor" },
    { name: "Dr. Ariel Onnis", title: "Legal Tech & Data Compliance" },
    { name: "Mg. Flor Vargas", title: "Human Rights Audits Specialist" },
    { name: "Mg. Andrea Cuellar Camarena", title: "Gender Studies & Equality" },
    { name: "Lic. Silvina Fernanda Yosía", title: "Forensic Psychology" },
    { name: "Mg. José Ignacio Agostini", title: "Labor & Relations Law" },
    { name: "Mg. Jhonatan S. Peña Carlos", title: "Corporate Negotiation & Applied Neuroscience" },
    { name: "Lic. Dulce Alejandra Hernández Vargas", title: "Business Administration Specialist in Management" },
    {
      name: "Mg. María Carolina Estepa Becerra",
      title: "Strategic Litigation in Inter-American Court & Commission on Human Rights",
    },
  ]

  return (
    <section className="relative z-10 py-20 md:py-32 lg:py-40 text-center px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-text-light">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-accent to-pink-accent">
            Expert Team
          </span>
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16">
          Meet the professionals dedicated to your compliance success
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="bg-card-bg border border-card-border rounded-xl px-6 py-4 text-text-light text-xl font-semibold hover:no-underline data-[state=open]:bg-purple-accent/20 transition-colors">
              Our Team & External Collaborators
            </AccordionTrigger>
            <AccordionContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="bg-card-bg border border-card-border rounded-xl p-6 text-left">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl font-bold text-text-light">{member.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-text-muted text-sm">{member.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
