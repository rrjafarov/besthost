"use client";
import React, { useState, useRef, useEffect } from "react";

const HomePageSeo = ({ home }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [maxHeightStyle, setMaxHeightStyle] = useState(null); // string like "200px" or null to omit
  const contentRef = useRef(null);

  const VISIBLE_LINES = 6; // neçə tam sətir əvvəlcə göstərilsin
  const TRANSITION_MS = 300;

  // saxlanılan collapsedHeight (px) üçün ref
  const collapsedHeightRef = useRef(null);

  // content dəyişəndə line-height və collapsedHeight hesabla, toggle lazım olmasını müəyyən et
  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setShowToggle(false);
      return;
    }

    const cs = window.getComputedStyle(el);
    let lineHeight = parseFloat(cs.lineHeight);
    if (isNaN(lineHeight)) {
      const fontSize = parseFloat(cs.fontSize) || 16;
      lineHeight = Math.round(fontSize * 1.2);
    } else {
      lineHeight = Math.round(lineHeight);
    }

    const collapsedHeight = lineHeight * VISIBLE_LINES;
    collapsedHeightRef.current = collapsedHeight;

    const fullHeight = el.scrollHeight;
    setShowToggle(fullHeight > collapsedHeight);

    // ilkin vəziyyətdə (collapsed) explicit collapsedHeight tətbiq et
    if (!expanded) {
      setMaxHeightStyle(`${collapsedHeight}px`);
    } else {
      // əgər expanded-dirsə açıq vəziyyətdə auto-olmaq üçün maxHeight null qoy
      // (bu, elementin təbii height ilə davranmasına imkan verir)
      setMaxHeightStyle(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [home?.bottom_content, VISIBLE_LINES]);

  // transition bitəndə: əgər expanded-dirsə maxHeightStyle null et (auto), əks halda collapsed olaraq saxla
  const handleTransitionEnd = () => {
    if (expanded) {
      // tam açıq halda max-height silinsin ki, responsive olsun
      setMaxHeightStyle(null);
    } else {
      // bağlı halda collapsed px olaraq qalsın (heç bir əlavə iş lazım deyil)
      const collapsed = collapsedHeightRef.current;
      if (collapsed) setMaxHeightStyle(`${collapsed}px`);
    }
  };

  // toggle funksiyası: açılma və bağlanma üçün düzgün animasiya ardıcıllığı
  const handleToggle = () => {
    const el = contentRef.current;
    if (!el) {
      setExpanded((p) => !p);
      return;
    }

    const collapsed = collapsedHeightRef.current || 0;
    const full = el.scrollHeight;

    if (!expanded) {
      // açılırıq: başlanğıc collapsed px-dən -> full px-ə animate
      // 1) ensure starting point is collapsed px
      setMaxHeightStyle(`${collapsed}px`);

      // 2) növbəti frame-də tam hündürlüyə set et ki, transition işləsin
      requestAnimationFrame(() => {
        // kiçik başqa rAF ilə də daha etibarlı edir
        requestAnimationFrame(() => {
          setMaxHeightStyle(`${full}px`);
          setExpanded(true);
        });
      });
    } else {
      // bağlanırıq: başlanğıc full px-dən -> collapsed px-ə animate
      // 1) ensure starting point is current full px
      setMaxHeightStyle(`${full}px`);

      // 2) növbəti frame-də collapsed px-ə set et ki, transition işləsin
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
              {expanded ? "view less" : "view more"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageSeo;




