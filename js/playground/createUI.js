define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUI = () => {
        return {
            flashInfo: (message) => {
                var _a;
                let flashBG = document.getElementById('flash-bg');
                if (flashBG) {
                    (_a = flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
                }
                flashBG = document.createElement('div');
                flashBG.id = 'flash-bg';
                const p = document.createElement('p');
                p.textContent = message;
                flashBG.appendChild(p);
                document.body.appendChild(flashBG);
                setTimeout(() => {
                    var _a;
                    (_a = flashBG === null || flashBG === void 0 ? void 0 : flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
                }, 1000);
            },
            showModal: (code, subtitle, links) => {
                document.querySelectorAll('.navbar-sub li.open').forEach(i => i.classList.remove('open'));
                const existingPopover = document.getElementById('popover-modal');
                if (existingPopover)
                    existingPopover.parentElement.removeChild(existingPopover);
                const modalBG = document.createElement('div');
                modalBG.id = 'popover-background';
                document.body.appendChild(modalBG);
                const modal = document.createElement('div');
                modal.id = 'popover-modal';
                if (subtitle) {
                    const titleElement = document.createElement('p');
                    titleElement.textContent = subtitle;
                    modal.appendChild(titleElement);
                }
                const pre = document.createElement('pre');
                modal.appendChild(pre);
                pre.textContent = code;
                const buttonContainer = document.createElement('div');
                const copyButton = document.createElement('button');
                copyButton.innerText = 'Copy';
                buttonContainer.appendChild(copyButton);
                const selectAllButton = document.createElement('button');
                selectAllButton.innerText = 'Select All';
                buttonContainer.appendChild(selectAllButton);
                const closeButton = document.createElement('button');
                closeButton.innerText = 'Close';
                closeButton.classList.add('close');
                modal.appendChild(closeButton);
                modal.appendChild(buttonContainer);
                if (links) {
                    Object.keys(links).forEach(name => {
                        const href = links[name];
                        const extraButton = document.createElement('button');
                        extraButton.innerText = name;
                        extraButton.onclick = () => (document.location = href);
                        buttonContainer.appendChild(extraButton);
                    });
                }
                document.body.appendChild(modal);
                const selectAll = () => {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(pre);
                    if (selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                };
                selectAll();
                // Keep track
                const oldOnkeyDown = document.onkeydown;
                const close = () => {
                    modalBG.parentNode.removeChild(modalBG);
                    modal.parentNode.removeChild(modal);
                    // @ts-ignore
                    document.onkeydown = oldOnkeyDown;
                };
                const copy = () => {
                    navigator.clipboard.writeText(code);
                };
                modalBG.onclick = close;
                closeButton.onclick = close;
                copyButton.onclick = copy;
                selectAllButton.onclick = selectAll;
                // Support hiding the modal via escape
                document.onkeydown = function (evt) {
                    evt = evt || window.event;
                    var isEscape = false;
                    if ('key' in evt) {
                        isEscape = evt.key === 'Escape' || evt.key === 'Esc';
                    }
                    else {
                        // @ts-ignore - this used to be the case
                        isEscape = evt.keyCode === 27;
                    }
                    if (isEscape) {
                        close();
                    }
                };
            },
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLYSxRQUFBLFFBQVEsR0FBRyxHQUFPLEVBQUU7UUFDL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFOztnQkFDN0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDakQsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsTUFBQSxPQUFPLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2lCQUM1QztnQkFFRCxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUE7Z0JBRXZCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3JDLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFBO2dCQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFFbEMsVUFBVSxDQUFDLEdBQUcsRUFBRTs7b0JBQ2QsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2dCQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDVixDQUFDO1lBRUQsU0FBUyxFQUFFLENBQUMsSUFBWSxFQUFFLFFBQWlCLEVBQUUsS0FBVyxFQUFFLEVBQUU7Z0JBQzFELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMs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R0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQTtxQkFDckQ7eUJBQU07d0JBQ0wsd0NBQXdDO3dCQUN4QyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUE7cUJBQzlCO29CQUNELElBQUksUUFBUSxFQUFFO3dCQUNaLEtBQUssRUFBRSxDQUFBO3FCQUNSO2dCQUNILENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBVSSB7XG4gIHNob3dNb2RhbDogKG1lc3NhZ2U6IHN0cmluZywgc3VidGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM/OiBhbnkpID0+IHZvaWRcbiAgZmxhc2hJbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVSSA9ICgpOiBVSSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmxhc2hJbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgZmxhc2hCRyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFzaC1iZycpXG4gICAgICBpZiAoZmxhc2hCRykge1xuICAgICAgICBmbGFzaEJHLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgICB9XG5cbiAgICAgIGZsYXNoQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZmxhc2hCRy5pZCA9ICdmbGFzaC1iZydcblxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgcC50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICAgIGZsYXNoQkcuYXBwZW5kQ2hpbGQocClcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxhc2hCRylcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYXNoQkc/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG5cbiAgICBzaG93TW9kYWw6IChjb2RlOiBzdHJpbmcsIHN1YnRpdGxlPzogc3RyaW5nLCBsaW5rcz86IGFueSkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1zdWIgbGkub3BlbicpLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSlcblxuICAgICAgY29uc3QgZXhpc3RpbmdQb3BvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcG92ZXItbW9kYWwnKVxuICAgICAgaWYgKGV4aXN0aW5nUG9wb3ZlcikgZXhpc3RpbmdQb3BvdmVyLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGV4aXN0aW5nUG9wb3ZlcilcblxuICAgICAgY29uc3QgbW9kYWxCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBtb2RhbEJHLmlkID0gJ3BvcG92ZXItYmFja2dyb3VuZCdcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCRylcblxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbW9kYWwuaWQgPSAncG9wb3Zlci1tb2RhbCdcblxuICAgICAgaWYgKHN1YnRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzdWJ0aXRsZVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpXG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZChwcmUpXG4gICAgICBwcmUudGV4dENvbnRlbnQgPSBjb2RlXG5cbiAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgY29weUJ1dHRvbi5pbm5lclRleHQgPSAnQ29weSdcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5QnV0dG9uKVxuXG4gICAgICBjb25zdCBzZWxlY3RBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgc2VsZWN0QWxsQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3QgQWxsJ1xuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEFsbEJ1dHRvbilcblxuICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gJ0Nsb3NlJ1xuICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG5cbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcblxuICAgICAgaWYgKGxpbmtzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rc1tuYW1lXVxuICAgICAgICAgIGNvbnN0IGV4dHJhQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICBleHRyYUJ1dHRvbi5pbm5lclRleHQgPSBuYW1lXG4gICAgICAgICAgZXh0cmFCdXR0b24ub25jbGljayA9ICgpID0+IChkb2N1bWVudC5sb2NhdGlvbiA9IGhyZWYpXG4gICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4dHJhQnV0dG9uKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxuXG4gICAgICBjb25zdCBzZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHByZSlcbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0QWxsKClcblxuICAgICAgLy8gS2VlcCB0cmFja1xuICAgICAgY29uc3Qgb2xkT25rZXlEb3duID0gZG9jdW1lbnQub25rZXlkb3duXG5cbiAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICBtb2RhbEJHLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG1vZGFsQkcpXG4gICAgICAgIG1vZGFsLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG1vZGFsKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG9sZE9ua2V5RG93blxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb3B5ID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKVxuICAgICAgfVxuXG4gICAgICBtb2RhbEJHLm9uY2xpY2sgPSBjbG9zZVxuICAgICAgY2xvc2VCdXR0b24ub25jbGljayA9IGNsb3NlXG4gICAgICBjb3B5QnV0dG9uLm9uY2xpY2sgPSBjb3B5XG4gICAgICBzZWxlY3RBbGxCdXR0b24ub25jbGljayA9IHNlbGVjdEFsbFxuXG4gICAgICAvLyBTdXBwb3J0IGhpZGluZyB0aGUgbW9kYWwgdmlhIGVzY2FwZVxuICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGV2dCA9IGV2dCB8fCB3aW5kb3cuZXZlbnRcbiAgICAgICAgdmFyIGlzRXNjYXBlID0gZmFsc2VcbiAgICAgICAgaWYgKCdrZXknIGluIGV2dCkge1xuICAgICAgICAgIGlzRXNjYXBlID0gZXZ0LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZ0LmtleSA9PT0gJ0VzYydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdGhpcyB1c2VkIHRvIGJlIHRoZSBjYXNlXG4gICAgICAgICAgaXNFc2NhcGUgPSBldnQua2V5Q29kZSA9PT0gMjdcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICBjbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG4iXX0=