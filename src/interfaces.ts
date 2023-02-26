export interface IFrameTaskMessage<T> {
    taskId: string,
    action?: string,
    value: T,
}

export interface IRouteSession{
    page: number,
    title: string,
    element: JSX.Element,
}