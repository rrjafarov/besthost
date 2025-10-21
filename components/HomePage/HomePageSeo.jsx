"use client";
import React, { useState, useRef, useEffect } from "react";

const HomePageSeo = ({ home, t }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [maxHeightStyle, setMaxHeightStyle] = useState(null);
  const contentRef = useRef(null);

  const VISIBLE_LINES = 6;
  const TRANSITION_MS = 300;

  const collapsedHeightRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setShowToggle(false);
      return;
    }

    // Mətnin tam göstərilməsi üçün müvəqqəti olaraq hündürlük məhdudiyyətini götürürük
    const originalMaxHeight = el.style.maxHeight;
    const originalOverflow = el.style.overflow;
    el.style.maxHeight = 'none';
    el.style.overflow = 'visible';

    const cs = window.getComputedStyle(el);
    let lineHeight = parseFloat(cs.lineHeight);
    if (isNaN(lineHeight)) {
      const fontSize = parseFloat(cs.fontSize) || 16;
      lineHeight = Math.round(fontSize * 1.5); // Daha yaxşı line-height hesablaması
    } else {
      lineHeight = Math.round(lineHeight);
    }

    // Tam mətnin hündürlüyünü ölçürük
    const fullHeight = el.scrollHeight;
    
    // Mətn elementlərini tapırıq (p, div, span, və s.)
    const textElements = el.querySelectorAll('p, div, span, h1, h2, h3, h4, h5, h6');
    let accumulatedHeight = 0;
    let collapsedHeight = lineHeight * VISIBLE_LINES;
    
    // Əgər mətn elementləri varsa, tam cümlələri saxlamağa çalışırıq
    if (textElements.length > 0) {
      for (let i = 0; i < textElements.length; i++) {
        const element = textElements[i];
        const elementHeight = element.offsetHeight;
        
        // Əgər bu elementi əlavə etdikdə VISIBLE_LINES sətrini aşmırıqsa
        if (accumulatedHeight + elementHeight <= lineHeight * VISIBLE_LINES) {
          accumulatedHeight += elementHeight;
        } else {
          // Son elementi tam göstərmək üçün onun hündürlüyünü də əlavə edirik
          if (accumulatedHeight === 0) {
            // Əgər ilk element çox böyükdürsə, minimum olaraq onu göstəririk
            accumulatedHeight = elementHeight;
          }
          break;
        }
      }
      
      // Əgər hesablanan hündürlük 0-dan böyükdürsə, onu istifadə edirik
      if (accumulatedHeight > 0) {
        collapsedHeight = accumulatedHeight + 20; // Kiçik margin əlavə edirik
      }
    }

    collapsedHeightRef.current = collapsedHeight;

    // Orijinal style-ları geri qaytarırıq
    el.style.maxHeight = originalMaxHeight;
    el.style.overflow = originalOverflow;

    setShowToggle(fullHeight > collapsedHeight + 20); // 20px buffer

    if (!expanded) {
      setMaxHeightStyle(`${collapsedHeight}px`);
    } else {
      setMaxHeightStyle(null);
    }
  }, [home?.bottom_content, VISIBLE_LINES]);

  const handleTransitionEnd = () => {
    if (expanded) {
      setMaxHeightStyle(null);
    } else {
      const collapsed = collapsedHeightRef.current;
      if (collapsed) setMaxHeightStyle(`${collapsed}px`);
    }
  };

  const handleToggle = () => {
    const el = contentRef.current;
    if (!el) {
      setExpanded((p) => !p);
      return;
    }

    const collapsed = collapsedHeightRef.current || 0;
    
    // Tam hündürlüyü düzgün hesablamaq üçün müvəqqəti olaraq məhdudiyyətləri götürürük
    const originalMaxHeight = el.style.maxHeight;
    const originalOverflow = el.style.overflow;
    el.style.maxHeight = 'none';
    el.style.overflow = 'visible';
    const full = el.scrollHeight;
    el.style.maxHeight = originalMaxHeight;
    el.style.overflow = originalOverflow;

    if (!expanded) {
      setMaxHeightStyle(`${collapsed}px`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeightStyle(`${full}px`);
          setExpanded(true);
        });
      });
    } else {
      setMaxHeightStyle(`${full}px`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeightStyle(`${collapsed}px`);
          setExpanded(false);
        });
      });
    }
  };

  return (
    <div id="homePageSeo">
      <div className="container">
        <div className="homePageSeoContent">
          <span>{home?.bottom_title}</span>

          <div
            ref={contentRef}
            className="homePageSeoText"
            style={{
              maxHeight: maxHeightStyle === null ? undefined : maxHeightStyle,
              overflow: maxHeightStyle === null ? undefined : "hidden",
              transition: `max-height ${TRANSITION_MS}ms ease`,
            }}
            onTransitionEnd={handleTransitionEnd}
            dangerouslySetInnerHTML={{ __html: home?.bottom_content }}
          ></div>

          {showToggle && (
            <div
              className="seoViewMore"
              role="button"
              tabIndex={0}
              onClick={handleToggle}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle();
                }
              }}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <strong>{expanded ? "-" : "+"}</strong>{" "}
              {expanded ? t?.viewLess : t?.viewMore}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageSeo;