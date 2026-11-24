export const STATUS_OPTIONS = ['to-do', 'in progress', 'done']
export const PRIORITY_OPTIONS = ['low', 'medium', 'high']

// Mengubah teks menjadi nama class CSS, contoh: "in progress" -> "in-progress"
export const toClass = (text) => text.replace(/\s+/g, '-')