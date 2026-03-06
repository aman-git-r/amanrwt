'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import {
    type Project,
    type ProjectCategory,
    projects,
    PROJECT_CATEGORIES,
} from '@/app/data/projects';
import { ProjectCard } from './ProjectCard';

function filterByCategory(projectsList: Project[], category: ProjectCategory): Project[] {
    return projectsList.filter((p) => p.category === category);
}

interface ProjectTabsProps {
    /** When true, used as main content on /projects page: no section heading, reduced top spacing */
    standalone?: boolean;
}

export function ProjectTabs({ standalone = false }: ProjectTabsProps) {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('websites');
    const [focusedIndex, setFocusedIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const hasUserNavigated = useRef(false);

    const filteredProjects = filterByCategory(projects, activeCategory);
    const tabCount = PROJECT_CATEGORIES.length;

    useEffect(() => {
        const shouldFocus = hasUserNavigated.current;
        if (shouldFocus) {
            tabRefs.current[focusedIndex]?.focus();
        }
    }, [focusedIndex, activeCategory]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            hasUserNavigated.current = true;

            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const next = (focusedIndex - 1 + tabCount) % tabCount;
                setFocusedIndex(next);
                setActiveCategory(PROJECT_CATEGORIES[next].value);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const next = (focusedIndex + 1) % tabCount;
                setFocusedIndex(next);
                setActiveCategory(PROJECT_CATEGORIES[next].value);
            } else if (e.key === 'Home') {
                e.preventDefault();
                setFocusedIndex(0);
                setActiveCategory(PROJECT_CATEGORIES[0].value);
            } else if (e.key === 'End') {
                e.preventDefault();
                setFocusedIndex(tabCount - 1);
                setActiveCategory(PROJECT_CATEGORIES[tabCount - 1].value);
            }
        },
        [tabCount, focusedIndex]
    );

    return (
        <section
            id="projects"
            className={
                standalone
                    ? 'pt-0'
                    : 'mt-20 border-t border-ctp-surface0 pt-16 sm:mt-24 sm:pt-20'
            }
            aria-labelledby={standalone ? undefined : 'projects-heading'}
        >
            {!standalone && (
                <h2
                    id="projects-heading"
                    className="font-mono text-sm font-medium uppercase tracking-wider text-ctp-mauve"
                >
                    Projects
                </h2>
            )}

            <div
                role="tablist"
                aria-label="Project categories"
                className="mt-6 flex flex-wrap gap-1"
                onKeyDown={handleKeyDown}
            >
                {PROJECT_CATEGORIES.map(({ value, label }, index) => (
                    <button
                        key={value}
                        type="button"
                        role="tab"
                        id={`tab-${value}`}
                        aria-selected={activeCategory === value}
                        aria-controls={`panel-${value}`}
                        tabIndex={activeCategory === value ? 0 : -1}
                        ref={(el) => {
                            tabRefs.current[index] = el;
                        }}
                        onClick={() => {
                            setActiveCategory(value);
                            setFocusedIndex(index);
                        }}
                        className={`border-b-2 py-3 mr-4 font-mono text-sm font-medium transition-colors ${
                            activeCategory === value
                                ? 'border-ctp-mauve text-ctp-mauve'
                                : 'border-transparent text-ctp-subtext0 hover:text-ctp-text'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {PROJECT_CATEGORIES.map(({ value }) => (
                <div
                    key={value}
                    id={`panel-${value}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${value}`}
                    hidden={activeCategory !== value}
                    className="mt-8"
                >
                    {activeCategory === value && (
                        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2" aria-label="Projects">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <li key={project.id}>
                                        <ProjectCard project={project} />
                                    </li>
                                ))
                            ) : (
                                <li className="col-span-full text-center font-mono text-sm text-ctp-subtext0">
                                    No projects in this category yet.
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    );
}
