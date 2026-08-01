import { useEffect, useRef, useState } from 'react';

export const useScrollSpy = (
    sectionIds: string[],
    options?: IntersectionObserverInit
) => {
    const [activeId, setActiveId] = useState<string>('');
    // بنخزن نسبة ظهور كل سيكشن بشكل دائم، مش بس اللي جالك في آخر callback
    const ratiosRef = useRef<Map<string, number>>(new Map());

    const idsKey = sectionIds.join(',');
    // بنحول الـ options لسلسلة نصية ثابتة عشان متبقاش سبب لإعادة تشغيل الـ effect كل رندر
    const optionsKey = JSON.stringify(options);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        // لو مفيش ولا سيكشن من اللي طلبناها موجود في الصفحة، امسح الأكتيف ومتكملش
        if (elements.length === 0) {
            setActiveId('');
            return;
        }

        ratiosRef.current = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                // بنحدّث بس اللي اتغيّر، والباقي فاضل زي ما هو في الـ Map
                entries.forEach((entry) => {
                    ratiosRef.current.set(
                        entry.target.id,
                        entry.isIntersecting ? entry.intersectionRatio : 0
                    );
                });

                // دلوقتي بندوّر على الأعلى نسبة ظهور من كل السيكشنز المخزّنة، مش بس اللي جه في الـ batch
                let bestId = '';
                let bestRatio = 0;
                ratiosRef.current.forEach((ratio, id) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestId = id;
                    }
                });

                // لو مفيش ولا سيكشن ظاهر خالص (بين سيكشنين مثلاً) امسح الأكتيف
                setActiveId(bestRatio > 0 ? bestId : '');
            },
            {
                // بدل مسافة متماثلة فوق وتحت، بنعمل "خط قراءة" رفيع قريب من أعلى الشاشة
                // ده بيحل مشكلة أول سيكشن وآخر سيكشن (لو أصغر من الهامش القديم كان بيتحسب مش ظاهر)
                rootMargin: '-15% 0px -55% 0px',
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
                ...options,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idsKey, optionsKey]);

    return activeId;
};