export default function attachEventFast<
  E extends Element,
  K extends keyof GlobalEventHandlersEventMap,
>(
  selectorOrList: string | NodeListOf<E>,
  eventName: K,
  handler: (event: GlobalEventHandlersEventMap[K], element: E) => void,
): void {
  // 1. Query once if given a selector
  const elements: NodeListOf<E> =
    typeof selectorOrList === "string"
      ? document.querySelectorAll<E>(selectorOrList)
      : selectorOrList;

  // 2. Attach with a classic for-loop, caching length
  for (let i = 0, len = elements.length; i < len; i++) {
    // Use a lightweight wrapper that calls the handler with the element
    elements[i].addEventListener(
      eventName,
      function (ev) {
        handler(ev as GlobalEventHandlersEventMap[K], elements[i]);
      },
      false,
    );
  }
}
