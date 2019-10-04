import MouseBackend from './MouseBackend'

const createMouseBackend = (dragThreshold) => (manager) =>
  new MouseBackend(manager, dragThreshold)

export default createMouseBackend
