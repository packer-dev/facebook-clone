import { useRef, useEffect, MouseEvent } from "react";

interface ClickOutsideProps {
  handleClick: (boolean: boolean | null) => void;
  status: boolean;
  description?: string;
  hiddenPopupWhenClick?: boolean;
}

const getAllDescendants = (node: any) => {
  let nodes: any[] = [];
  node.childNodes.forEach((child: any) => {
    nodes.push(child);
    nodes = nodes.concat(getAllDescendants(child));
  });
  return nodes;
};

const useClickOutside = ({ handleClick, status }: ClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const clickOutside: any = (event: MouseEvent) => {
    if (!ref.current) return;
    let children = getAllDescendants(ref.current);
    let outside = children.find((item) => item === (event.target as any));
    if (!outside) {
      document.removeEventListener("click", clickOutside);
      handleClick(false);
    }
  };
  const hidden = () => {
    handleClick(false);
  };
  useEffect(() => {
    if (status) {
      document.addEventListener("click", clickOutside);
    } else {
      document.removeEventListener("click", clickOutside);
    }
    return () => {
      document.removeEventListener("click", clickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, ref.current]);

  return { ref, hidden };
};

export default useClickOutside;
