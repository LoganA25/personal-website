'use client'

import { FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

export function Form() {
  const [from, setFrom] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      from,
      email,
      subject,
      message,
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      toast.success('Email sent successfully!')
      setFrom('')
      setEmail('')
      setSubject('')
      setMessage('')
    } else {
      const errorData = await response.json()
      toast.error(`Failed to send email: ${errorData.message}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="ml-auto space-y-4">
      <Toaster toastOptions={{ duration: 4500  }} />
      <input
        type="text"
        placeholder="Name"
        className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#000000]"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#000000]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#000000]"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        rows={6}
        maxLength={1000}
        className="w-full rounded-md border px-4 pt-2.5 text-sm outline-[#000000]"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full rounded-md border bg-[#000000] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#FFFFFF] hover:text-[#000000] hover:outline-[#00000]"
      >
        Send
      </button>
    </form>
  )
}
