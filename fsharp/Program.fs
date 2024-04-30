let prefix prefixStr baseStr =
  prefixStr + ", " + baseStr

let names = ["Eddie"; "Pete"; "Simon"; "Jack"; "Mari"]

let prefixWithHello = prefix "Hello"

let exclaim s =
  s + "!"

let allHello = prefixWithHello >> exclaim

let sayHello = 
  names
  |> Seq.map (fun name -> allHello name)
  |> Seq.sort
  |> Seq.iter ( printfn "%s")