/* DEPENDENCIES */
import { useState } from 'react'
import React from 'react'

// import printing css
import '../styles/print.css'

export default function Editor() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      bullets: ['Developed web apps'],
      visible: true,
    },
  ])

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: 'New Position',
      bullets: [''],
      visible: true,
    }
    setExperiences([...experiences, newExperience])
  }

  const addBullet = (expId) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === expId ? { ...exp, bullets: [...exp.bullets, ''] } : exp,
      ),
    )
  }

  const toggleVisibility = (expId) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === expId ? { ...exp, visible: !exp.visible } : exp,
      ),
    )
  }

  const saveAsPDF = () => {
    const resumePreview = document.getElementById('resume-preview')
    if (resumePreview) {
      const printWindow = window.open('', '_blank')

      // Extract styles from the main document
      const styles = Array.from(document.styleSheets)
        .map((sheet) => {
          try {
            return Array.from(sheet.cssRules || [])
              .map((rule) => rule.cssText)
              .join('\n')
          } catch (e) {
            return ''
          }
        })
        .join('\n')

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Resume</title>
          <style>${styles}</style>
        </head>
        <body>
          ${resumePreview.outerHTML}
        </body>
        </html>
      `)

      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Side: Inputs */}
      <div className="w-1/2 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-lg font-semibold">Customize Resume</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={exp.visible}
                onChange={() => toggleVisibility(exp.id)}
              />
              <span>{exp.title}</span>
            </label>
            {exp.bullets.map((bullet, i) => (
              <input
                key={i}
                type="text"
                value={bullet}
                className="block w-full p-1 border rounded mt-1"
                onChange={(e) => {
                  const newBullets = [...exp.bullets]
                  newBullets[i] = e.target.value
                  setExperiences(
                    experiences.map((ex) =>
                      ex.id === exp.id ? { ...ex, bullets: newBullets } : ex,
                    ),
                  )
                }}
              />
            ))}
            <button
              className="mt-2 text-blue-600"
              onClick={() => addBullet(exp.id)}
            >
              + Add Bullet
            </button>
          </div>
        ))}
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full"
          onClick={addExperience}
        >
          + Add Experience
        </button>
      </div>

      {/* Right Side: Live Preview */}
      <div className="w-1/2 p-4 bg-white border-l overflow-y-auto">
        <h2 className="text-lg font-semibold text-center">Resume Preview</h2>
        <div id="resume-preview" className="p-4 border rounded shadow-lg">
          {experiences.map(
            (exp, index) =>
              exp.visible && (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <ul className="list-disc ml-5">
                    {exp.bullets.map(
                      (bullet, i) => bullet && <li key={i}>{bullet}</li>,
                    )}
                  </ul>
                </div>
              ),
          )}
        </div>
        <button
          onClick={saveAsPDF}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Save as PDF
        </button>
      </div>
    </div>
  )
}
