import React from 'react';

const Current = () => {
    return (
        <>
            <section>
                <h2>현재 위치: </h2>
                <article>
                    <time> 관측 시각: </time>
                    <p>날씨 상태: </p>
                </article>
            </section>

            <section>
                <article>
                    <p>아이콘</p>
                    <p>기온</p>
                    <section>
                        <span>C</span>
                        <span>F</span>
                    </section>
                </article>
                <article>
                    <p>강수량</p>
                    <p>적설량</p>
                    <p>습도</p>
                    <p>풍속</p>
                </article>
            </section>
        </>
    )
}

export default Current;