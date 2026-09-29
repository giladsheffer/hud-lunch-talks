# Common lunch talks

A static page that shows one lunch-talk topic at random.

## Add a topic

Edit `topics.txt`. Put one topic on each line. Blank lines are ignored, and so are lines whose first non-space character is `#`.


## Preview locally

Opening `index.html` as a local file will not load `topics.txt`. From this folder, run:

```bash
python3 -m http.server
```

Then open `http://127.0.0.1:8000/`.
