import os
import re
import glob

files = glob.glob("/home/abdi/realtime/Front_end/src/pages/*.jsx")

def get_link(text):
    text_lower = text.lower()
    if "live monitor" in text_lower or ">dashboard<" in text_lower or " dashboard" in text_lower or text_lower.strip() == "dashboard":
        return "/dashboard"
    if "history" in text_lower or "analytics" in text_lower:
        return "/analytics"
    if "fault logs" in text_lower or "maintenance" in text_lower:
        return "/fault-logs"
    if "nodes" in text_lower or "grid map" in text_lower or "overview" in text_lower:
        return "/iot-dashboard"
    if "telemetry" in text_lower or "system health" in text_lower or "hardware" in text_lower or "phase analysis" in text_lower:
        return "/monitoring"
    if "about" in text_lower:
        return "/"
    return "#"

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if "import { Link }" not in content and "<a " in content:
        content = "import { Link } from 'react-router-dom';\n" + content

    content = re.sub(r'<a([^>]+)href="#"([^>]*)>(.*?)</a>', lambda m: f'<Link{m.group(1)}to="{get_link(m.group(3))}"{m.group(2)}>{m.group(3)}</Link>', content, flags=re.DOTALL)
    
    with open(file, 'w') as f:
        f.write(content)

