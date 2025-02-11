import { createOpenGraphImage } from '@solid-mediakit/og/server'
import { createMemo } from 'solid-js'
import { createSignal } from 'solid-js'

const DynamicImage1 = (props) => {
  const img = (...args) => {
    'use server'

    const [r0] = args
    return createOpenGraphImage(<div>{r0}</div>)
  }
  const url = createMemo(() => {
    return (
      img.url.replace('_server', '_server/') +
      `&args=${encodeURIComponent(JSON.stringify(props.values))}`
    )
  })
  return url
}
const [signal] = createSignal('')
const coolVar = DynamicImage1({
  values: [signal()],
})
