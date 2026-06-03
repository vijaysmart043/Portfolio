"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "@/data/skills"
import { Code2, Users, Brain, Zap, Target, Lightbulb } from "lucide-react"

const skillIcons = {
  "Programming Languages": Code2,
  "Frontend Development": Zap,
  "Database": Target,
  "Tools & Technologies": Lightbulb,
}

export function SkillsDisplay() {
  return (
    <div className="w-full space-y-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Skills & Expertise
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical capabilities and professional competencies
        </p>
      </div>

      {/* Technical Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/20">
            <Code2 className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SKILLS.map((category, categoryIndex) => {
            const IconComponent = skillIcons[category.category as keyof typeof skillIcons] || Code2
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-5 w-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50"
                      >
                        <span className="font-medium text-sm md:text-base">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/20">
            <Users className="h-6 w-6 text-purple-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Soft Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOFT_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-5 h-full border-2 hover:border-purple-500/50 transition-all cursor-pointer">
                <div className="flex items-start gap-3 mb-2">
                  <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">{skill.name}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

