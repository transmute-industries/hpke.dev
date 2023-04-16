import { useEffect, useState } from 'react'
import { parse } from 'csv/sync'

import { Footer } from '@/components/footer'

type HPKEImplementation = {
  name: string
  link: string
}

export default function Implementations() {
  const [implementations, setImplementations] = useState<HPKEImplementation[]>(
    [],
  )
  useEffect(() => {
    ;(async () => {
      const res = await fetch('/implementations.csv')
      const data = await res.text()
      const rawRecords = parse(data)
        .slice(1)
        .map((r: string[]) => {
          const [name, link] = r
          return { name: name.trim(), link: link.trim() }
        })
      setImplementations(rawRecords)
    })()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:p-4">
          <a
            href="https://hpke.dev/implementations"
            target="_blank"
            rel="noopener noreferrer"
          >
            HPKE Implementations
          </a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/transmute-industries/hpke.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {implementations.map(({ name, link }) => {
              return (
                <tr key={name}>
                  <td scope="row" className="px-6 py-4">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </main>
  )
}
