# hypothesis-highlighter

This is [highlighter.ts from hypothesis/client](https://github.com/hypothesis/client/blob/3876720a6e369ab86ead9422184472711df42260/src/annotator/highlighter.ts) extracted as a standalone library.

Also includes a stripped-down version of [guest.ts](https://github.com/hypothesis/client/blob/3876720a6e369ab86ead9422184472711df42260/src/annotator/guest.ts), with most of the functionality removed (in particular, there is no UI, no communication with the sidebar or the host, no events).

The only functionality that is kept is

- `createAnnotation()`
    - creates `AnnotationData` (suitable for storing on a backend)
    - manipulates the DOM to add elements and classes that enable the highlight to be displayed
- `loadAnnotations(annotations: AnnotationData[])`
    - takes `AnnotationData[]` and modifies the DOM enabling the highlights to be displayed

Example usage:

```typescript
const guest = new Guest(document.body)
const annotations = []
// select text
annotations.push(await guest.createAnnotation({highlight: true}))
// select another piece of text
annotations.push(await guest.createAnnotation({highlight: true}))
guest.destroy()
// annotations are suitable to be stored on a backend

const guest2 = new Guest(document.body)
guest2.loadAnnotations(annotations)
```
