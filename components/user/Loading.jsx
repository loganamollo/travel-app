import { useValue } from "@/context/ContextProvider"
import { Backdrop, CircularProgress } from "@mui/material"


export default function Loading ({}) {
  const {state: {loading}} = useValue()

  return (
    <Backdrop
    open={loading}
    sx={{zIndex: (theme) => theme.zIndex.modal + 1}}
    >
      <CircularProgress sx={{color: 'white'}} />
    </Backdrop>
  )
}