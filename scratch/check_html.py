import sys
from html.parser import HTMLParser

class HTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.errors = 0

    def handle_starttag(self, tag, attrs):
        # Self-closing tags in HTML5
        if tag in ['meta', 'link', 'img', 'br', 'hr', 'input', 'rect', 'path', 'defs', 'filter', 'feDropShadow']:
            return
        self.tags.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if tag in ['meta', 'link', 'img', 'br', 'hr', 'input', 'rect', 'path', 'defs', 'filter', 'feDropShadow']:
            return
        if not self.tags:
            print(f"Error: Close tag </{tag}> at line {self.getpos()[0]} column {self.getpos()[1]} has no matching start tag.")
            self.errors += 1
            return
        
        last_tag, pos = self.tags.pop()
        if last_tag != tag:
            print(f"Error: Mismatched tags. Closed </{tag}> at line {self.getpos()[0]} column {self.getpos()[1]}, but expected </{last_tag}> from line {pos[0]} column {pos[1]}.")
            self.errors += 1

    def close(self):
        super().close()
        if self.tags:
            for tag, pos in self.tags:
                print(f"Error: Unclosed tag <{tag}> from line {pos[0]} column {pos[1]}.")
                self.errors += 1

def validate_html(filepath):
    validator = HTMLValidator()
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        validator.feed(content)
        validator.close()
        if validator.errors == 0:
            print("HTML is perfectly balanced and well-formed!")
            sys.exit(0)
        else:
            print(f"HTML validation failed with {validator.errors} error(s).")
            sys.exit(1)
    except Exception as e:
        print(f"Error reading file: {e}")
        sys.exit(1)

if __name__ == '__main__':
    validate_html('/Users/jeremy/antigravity/LCML/questionnaire-relief-hydrographie.html')
