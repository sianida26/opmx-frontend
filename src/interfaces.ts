export interface IFrameTaskMessage<T> {
    taskId: string,
    action?: string,
    value: T,
}