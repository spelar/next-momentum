import Skeleton from "react-loading-skeleton";

export default function SkeletonElement() {
  return (
    <div
      data-testid="skeleton-element"
      style={{ margin: "0px auto 0", maxWidth: "768px" }}
    >
      <div style={{ display: "flex" }}>
        <p style={{ display: "flex", flexDirection: "column", width: "60px" }}>
          <Skeleton height={60} width={"100%"} style={{ marginTop: 10 }} />
        </p>
        <p style={{ flex: 1, marginTop: "5px", marginLeft: "10px" }}>
          <Skeleton
            count={2}
            width={"100%"}
            height={20}
            style={{ marginTop: 10 }}
          />
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ display: "flex", flexDirection: "column", width: "60px" }}>
          <Skeleton height={60} width={"100%"} style={{ marginTop: 10 }} />
        </p>
        <p style={{ flex: 1, marginTop: "5px", marginLeft: "10px" }}>
          <Skeleton
            count={2}
            width={"100%"}
            height={20}
            style={{ marginTop: 10 }}
          />
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ display: "flex", flexDirection: "column", width: "60px" }}>
          <Skeleton height={60} width={"100%"} style={{ marginTop: 10 }} />
        </p>
        <p style={{ flex: 1, marginTop: "5px", marginLeft: "10px" }}>
          <Skeleton
            count={2}
            width={"100%"}
            height={20}
            style={{ marginTop: 10 }}
          />
        </p>
      </div>
    </div>
  );
}
