import {
  SocketEventHandlerMap,
  LiveAssistantClient,
} from '@live-assistant/protocols-data'
import { useRouter } from 'next/router'
import {
  useMemo,
  useEffect,
} from 'react'

export function useSocket(
  handlers: Partial<SocketEventHandlerMap>,
  timeout?: number,
) {
  const {
    query: {
      port,
      password,
    },
  } = useRouter()

  const parsedPort = useMemo(() => parseInt(port as string), [port])

  const client = useMemo(() => {
    return new LiveAssistantClient(
      parsedPort,
      password as string,
      handlers,
      timeout,
    )
  }, [handlers, parsedPort, password, timeout])

  useEffect(() => {
    if (!isNaN(parsedPort) && password !== undefined) {
      client.start()
    }

    return () => {
      client.stop()
    }
  }, [client, parsedPort, password, port])
}
