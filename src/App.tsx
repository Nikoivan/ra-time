import React, { ReactNode, useState } from "react";

type VideoTypeProps = {
  url: string;
  date: string;
};

const DateTimePretty = (Component: React.ComponentType<{ date: string }>) => {
  return (props: { date: string }) => {
    let date: string;
    const componentDate = new Date(props.date).getTime() / 1000 / 60;
    const now = new Date().getTime() / 1000 / 60;
    const diffTime = now - componentDate;
    if (diffTime < 60) {
      date = `${Math.round(diffTime)} минут назад`;
    } else if (diffTime >= 60 && diffTime / 60 < 24) {
      date = `${Math.round(diffTime / 60)} часов назад`;
    } else {
      date = `${Math.round(diffTime / 60 / 24)} дней назад`;
    }
    return <Component {...props} date={date} />;
  };
};

const PrettyDateTime = DateTimePretty(DateTime);

function DateTime(props: { date: string }): ReactNode {
  return <p className="date">{props.date}</p>;
}

function Video(props: VideoTypeProps): ReactNode {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <PrettyDateTime date={props.date} />
    </div>
  );
}

function VideoList(props: { list: VideoTypeProps[] }): ReactNode {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-10-31 21:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-10-31 11:24:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
