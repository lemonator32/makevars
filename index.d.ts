export default function make<T extends Proxy>(input:
    { get: (key: string, proxy: T) => any } |
    { set: (key: string, proxy: T, value: any) => any } |
    { get: (key: string, proxy: T) => any, set: (key: string, proxy: Proxy<T>, value: any) => any } |
    ((this: Object, key: string, proxy: T) => any) |
    { [Symbol.iterator]: Generator } |
    { [key: string]: any }
): T;
