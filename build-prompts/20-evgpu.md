# 20 — eVGPU Compute Layer

## Task
Integrate Nano eVGPU system documentation and stubs.

## Components
- eVGPU: Pure CPU compute (no GPU needed)
- FemtoLLM: 16-dim nano model
- BlockArray: 1000³ compute grid
- Cube: 9-node system (8 vertices + 1 central)

## Web Integration
- `/tools/evgpu/index.html` — eVGPU dashboard
- Visualize compute operations in browser
- Web Worker for tensor ops (no main thread blocking)
- Use Float32Array for efficient memory

## Performance Targets
- FemtoLLM: 0.1s/req, 4MB RAM
- BlockArray: sparse storage
- Cube: 9 concurrent operations
- Total: <1GB memory

## Done When
eVGPU dashboard shows compute visualization with basic tensor ops.
