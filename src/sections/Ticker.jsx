import { CATS } from '../data'

export default function Ticker() {
  return (
    <div className="tick" aria-hidden="true">
      <div>
        {[0, 1].map((n) =>
          CATS.map((c) => <span key={n + c}>{c}<i> ✦</i></span>)
        )}
      </div>
    </div>
  )
}