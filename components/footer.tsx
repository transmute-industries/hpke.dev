import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const Footer = () => {
  const router = useRouter()
  return (<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
  <a
    href="https://datatracker.ietf.org/doc/rfc9180"
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
      RFC9180{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p
      className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
    >
      Read the RFC from CFRG.
    </p>
  </a>
  <a
    href="https://www.iana.org/assignments/hpke/hpke.xhtml"
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
      IANA HPKE {' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p
      className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
    >
      IANA registry for HPKE.
    </p>
  </a>

  <a
    href="https://datatracker.ietf.org/doc/draft-ietf-cose-hpke/"
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
    draft-ietf-cose-hpke{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p
      className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
    >
      Read the draft from the COSE WG.
    </p>
  </a>

  <a
    onClick={()=>{ router.push('/implementations') }}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
  >
    <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
      Implementations{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p
      className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
    >
      Find implementations.
    </p>
  </a>

  
</div>)
}