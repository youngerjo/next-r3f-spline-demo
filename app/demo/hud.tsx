import { useKeyboardControls } from '@react-three/drei'

export default function HUD() {
  const w = useKeyboardControls((state) => state.w)
  const a = useKeyboardControls((state) => state.a)
  const s = useKeyboardControls((state) => state.s)
  const d = useKeyboardControls((state) => state.d)

  const kbdClassName = (pressed) => {
    return pressed ? 'kbd bg-gray-300' : 'kbd bg-gray-100'
  }

  return (
    <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none">
      <div className="w-72 h-16 glass p-3 mt-10 rounded-lg flex justify-center items-center">
        <div className="text-lg font-bold">R3F Next Spline Demo</div>
      </div>
      <div className="card glass p-3 mb-10 gap-3">
        <div className="text-sm">Press WASD keys to rotate the camera.</div>
        <div>
          <div className="flex justify-center w-full">
            <kbd className={kbdClassName(w)}>W</kbd>
          </div>
          <div className="flex justify-center w-full">
            <kbd className={kbdClassName(a)}>A</kbd>
            <kbd className={kbdClassName(s)}>S</kbd>
            <kbd className={kbdClassName(d)}>D</kbd>
          </div>
        </div>
      </div>
    </div>
  )
}
