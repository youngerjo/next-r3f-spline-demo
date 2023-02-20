'use client'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import HUD from './hud'
import { useMemo } from 'react'

enum KeyboardButtons {
  w = 'w',
  a = 'a',
  s = 's',
  d = 'd'
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  const keyboardMap = useMemo<KeyboardControlsEntry<KeyboardButtons>[]>(
    () => [
      { name: KeyboardButtons.w, keys: ['w', 'W'] },
      { name: KeyboardButtons.a, keys: ['a', 'A'] },
      { name: KeyboardButtons.s, keys: ['s', 'S'] },
      { name: KeyboardButtons.d, keys: ['d', 'D'] }
    ],
    []
  )

  return (
    <KeyboardControls map={keyboardMap}>
      <div className="flex-1 z-0">
        <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }}>
          {children}
        </Canvas>
        <HUD />
      </div>
    </KeyboardControls>
  )
}
