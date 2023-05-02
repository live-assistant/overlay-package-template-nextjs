import {
  DataType,
  DataTypeToPayloadMap,
  PROTOCOL_VERSION,
  SocketDataPayload,
} from '@live-assistant/protocols-data'
import { useRouter } from 'next/router'
import {
  useEffect,
  useMemo,
} from 'react'
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket'

export function useSocket<T extends DataType, P = DataTypeToPayloadMap[T]>(
  type: T,
  handler: (payload: P) => void,
  timeout?: number,
) {
  const {
    query: {
      port,
      password,
    },
  } = useRouter()

  const parsedPort = useMemo(() => parseInt(port as string ?? '0', 10), [port])
  const parsedPassword = useMemo(() => password as string | undefined, [password])

  const url = useMemo(
    () => `ws://localhost:${parsedPort}/data`,
    [parsedPort],
  )

  const shouldConnect = useMemo(
    () => parsedPort !== 0 && parsedPassword !== undefined,
    [parsedPassword, parsedPort],
  )

  const {
    lastJsonMessage,
  } = useWebSocket(url, {
    queryParams: {
      authorization: parsedPassword ?? '',
      types: type,
      version: PROTOCOL_VERSION,
    },
    retryOnError: true,
    reconnectInterval: timeout,
    shouldReconnect: () => true,
  }, shouldConnect)

  useEffect(() => {
    if (lastJsonMessage !== null) {
      handler((lastJsonMessage as SocketDataPayload).payload as P)
    }
  }, [handler, lastJsonMessage])
}
