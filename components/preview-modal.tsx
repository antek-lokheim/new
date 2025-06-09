"use client"
import { X, ExternalLink } from "lucide-react"

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
  previewUrl: string
  templateName: string
}

export default function PreviewModal({ isOpen, onClose, previewUrl, templateName }: PreviewModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Preview: {templateName}</h3>
          <div className="flex items-center gap-2">
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              Buka di Tab Baru
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        <iframe
          src={previewUrl}
          className="w-full h-[calc(100%-60px)]"
          title={`Preview ${templateName}`}
          loading="lazy"
        />
      </div>
    </div>
  )
}
